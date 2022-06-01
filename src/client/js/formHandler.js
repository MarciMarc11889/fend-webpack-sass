const TestTextGerman = "Dies ist ein Testtext um zu sehen, dass die API richtig funktioniert."
const TestTextFrench = "Je suis trés fatigueé"
const TestTextEnglish = "I'm afraid of coding"


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
// Request to API of Meaning Cloud. The API tells the User the Language of the entered Text
const formdata = new FormData();
formdata.append("key", "bd57c24533f8c58c206c97734b056bb6");
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
    .then((body) => {
        console.log(body)
        const polarity=body.score_tag
        const subjectivity =body.subjectivity
        const text = body.sentence_list[0].text
        return {polarity, subjectivity, text}
    }) 
    .then(({polarity, subjectivity, text}) => 
        document.getElementById('results').innerHTML = 'Polarity: '+ polarity + '<br>Subjectivity: '+ subjectivity + '<br>Text: ' + text)
    .catch(error => console.log('error', error));




// const formdata = new FormData();
    // formdata.append("key", "bd57c24533f8c58c206c97734b056bb6");
    // formdata.append("txt", TestTextGerman);
    
    // const requestOptions = {
    //     method: 'POST',
    //     body: formdata,
    //     redirect: 'follow'
    // };
    
    // const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
    // .then(response => {
    //     const body = response.json()
    //     return body
    // })
    // .then((body) => {
    //     console.log(body.language_list[0].name)
    //     return body
    // }) 
    // .then((body) => document.getElementById('results').innerHTML = 'The entered Text is '+ body.language_list[0].name)
    // .catch(error => console.log('error', error));

}

export { handleSubmit }
