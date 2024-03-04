document.querySelector("#dice-btn").addEventListener("click", async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    document.querySelector("#advice-id").textContent = data.slip.id
    document.querySelector("#advice-text").textContent = data.slip.advice
})