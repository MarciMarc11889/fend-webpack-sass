const TestTextGerman = "Dies ist ein Testtext um zu sehen, dass die API richtig funktioniert."

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const formdata = new FormData();
    formdata.append("key", "bd57c24533f8c58c206c97734b056bb6");
    formdata.append("txt", TestTextGerman);
    
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    
    const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
    .then(response => ({
        status: response.status, 
        body: response.json()
    }))
    .then(status, body => console.log(status, body))
    .catch(error => console.log('error', error));

    // Define API Request to Open Weather Map 
    // const ApiRequest = async (CityUrl) => {
    //     const res = await fetch(CityUrl)
    //         try {
    //             const data = res.json()
    //             return data
    //         }
    //         catch(error) {
    //             console.log("error", error);
    //         }
    //     }

    // ApiRequest(CityUrl)
    // .then (data => {
    //     console.log(data);
    //     document.getElementById('results').innerHTML = 'Current Temperature in '+ data.name + ' is ' + data.main.temp + ' °C'
    // })

}

export { handleSubmit }
