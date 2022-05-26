const CityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=a448a4a826b1fca8eaa50dcd50dbc65d&units=metric' // Cityname &appid={API key}'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    // Define API Request to Open Weather Map 
    const ApiRequest = async (CityUrl) => {
        const res = await fetch(CityUrl)
            try {
                const data = res.json()
                return data
            }
            catch(error) {
                console.log("error", error);
            }
        }

    ApiRequest(CityUrl)
    .then (data => {
        console.log(data);
        document.getElementById('results').innerHTML = 'Current Temperature in '+ data.name + ' is ' + data.main.temp + ' °C'
    })

}

export { handleSubmit }
