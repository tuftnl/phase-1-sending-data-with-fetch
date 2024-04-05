const { config } = require("chai")

// Add your code here
function submitData(inputName,inputEmail) {
    let formData = {name: inputName,
    email: inputEmail}
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            console.log(`${response.json} this is the responsejson`)
            return response.json();
        })
        .then(function (object) {
            let objectId = document.createElement('h2')
            objectId.className = 'objectId'
            let mainBody = document.querySelector('body');
            mainBody.appendChild(objectId);
            objectId.textContent = `New item id: ${object["id"]}`
            console.log(object);
            console.log(object["id"])
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            let objectError = document.createElement('h2')
            objectError.className = 'objectError'
            let mainBody = document.querySelector('body')
            mainBody.appendChild(objectError)
            objectError.textContent = `Error: ${error}`
            console.log(error)
        });
}
