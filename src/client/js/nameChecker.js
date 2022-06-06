// Define the function checkForName 
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    // Check if the input text is in the names list above 
    if(names.includes(inputText.submittedText)) {
        alert("Welcome, Captain!")
    }
    // Message if the input text is not in the list above 
    else{
        alert("Request only for API")
    }
}

export { checkForName }
