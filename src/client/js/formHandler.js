import { get } from "http"
import { async } from "q"

const TestTextGerman = "Dies ist ein Testtext um zu sehen, dass die API richtig funktioniert."
const TestTextFrench = "Je suis trés fatigueé"
const TestTextEnglish = "I'm afraid of coding"


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const apiRequest=fetch('http://localhost:8081/api',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin'
        // body:JSON.stringify(data)
    })
    .then((apiRequest) => {
        const answer = apiRequest.json()
        return answer
    })
    .then (answer => {console.log(answer)
    })
    
    
    

    

}


export { handleSubmit }
