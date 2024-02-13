const button = document.querySelector("#dice-btn");

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice").then(response => {
        response.json().then(data => {
            const adviceID = document.querySelector("#advice-id");
            const adviceText = document.querySelector("#advice-text");


            adviceID.textContent = data.slip.id
            adviceText.textContent = data.slip.advice
        })
    })
})





