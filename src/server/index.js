var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()
const FormData = require('form-data')
const fetch = require('node-fetch')
const TestTextEnglish = "I'm afraid of coding"

// To avoid an error with ssl-certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let appData ={}


var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))


app.post('/api', (req, res) =>{

    // Request to API of Meaning Cloud. 
const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", TestTextEnglish);
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => {
        const body = response.json()
        return body
    })
    .then(body => {
        console.log(body)
        const polarity=body.score_tag
        const subjectivity =body.subjectivity
        const text = body.sentence_list[0].text
        appData ={polarity, subjectivity, text}
        return appData
    })
    .then(appData => {
        console.log(appData)
        return appData
    })
    .then(appData =>{res.send(appData)})
    .catch(error => console.log('error', error));
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
