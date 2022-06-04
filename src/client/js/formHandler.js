import { get } from "http"
import { async } from "q"

const TestTextGerman = "Dies ist ein Testtext um zu sehen, dass die API richtig funktioniert."
const TestTextFrench = "Je suis trés fatigueé"
const TestTextEnglish = "I'm afraid of coding"


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = {
        submittedText: document.getElementById('name').value}

    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    // Check for emtpy form 
    if(formText.submittedText =="") {
        alert('Field cannot be empty!')
    }
    else {
        const apiRequest=fetch('http://localhost:8081/api',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(formText)
        })
        .then(apiRequest => {
            const answer = apiRequest.json()
            return answer
        })
        .then (answer => {
            console.log(answer)
            return answer
        })
        .then(answer => {document.getElementById('results').innerHTML = 'Polarity: '+ answer.polarity + '<br>Subjectivity: '+ answer.subjectivity + '<br>Text: ' + answer.text})
 
    }
}
export { handleSubmit }
