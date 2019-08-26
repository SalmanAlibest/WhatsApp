let handleSuccess = function (response) {
    // handle success
    console.log("SUCCESS!");
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);
        let message = response.data[i];
        document.querySelector("ul").innerHTML += `
        <li class="message">
            <div id="main">
            <div id="img-tag">
            <img src="${message.profilePic}" />
            </div>
            <div id="info">
            <h3>${message.name}</h3>
            <p>${message.firstLine}</p>
            </div>
            <div id="date">
            <p>${message.time}</p>
            </div>
            </div>
        </li>
    `

    }
}

let handleError = function (error) {
    // handle error
    console.log("ERROR!!!!!!! :'-[ ");
    console.log(error);
}

let finishUp = function () {
    // always executed
    console.log("THE END!");
}


// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(handleSuccess)
    .catch(handleError)
    .finally(finishUp);