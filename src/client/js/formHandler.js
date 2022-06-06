// Define handleSubmit 
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = {
        submittedText: document.getElementById('name').value
    }
    // Call checkForName 
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    // Check for emtpy form 
    if(formText.submittedText =="") {
        alert('Field cannot be empty!')
    }
    else {
        apiRequest(formText)
    }
}

// Define api request function 
async function apiRequest (formText) { fetch('http://localhost:8081/api',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formText)
        })
        // Define response to answer and transform to json 
        .then(apiRequest => {
            const answer = apiRequest.json()
            return answer
        })
        // Prin answer to console and return it for next step
        .then (answer => {
            console.log(answer)
            return answer
        })
        // Hand over answer to the front end for the client 
        .then(answer => {document.getElementById('results').innerHTML = 'Polarity: '+ answer.polarity + '<br>Subjectivity: '+ answer.subjectivity + '<br>Text: ' + answer.text})
        .catch(error => console.log('error', error));
    }


export { handleSubmit }
