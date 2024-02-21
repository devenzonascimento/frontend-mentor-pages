const openButton = document.querySelector("#back-btn");
const closeButton = document.querySelector("#icon-close-modal");

const modal = document.querySelector(".selection-modal")

openButton.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})

const radioInputs = document.querySelectorAll(".radio-input");

radioInputs.forEach(radioInput => {
    radioInput.addEventListener("change", () => {
        document.querySelectorAll(".input-container").forEach(container => {
            container.classList.remove("active")
        })
        
        const inputContainer = radioInput.closest(".input-container");
        inputContainer.classList.add("active")

        document.querySelectorAll(".pledge-input").forEach(pledge => {
            pledge.style.display = "none"
        })

        /*  O ERRO ESTÁ AQUI, NA HORA DE ENCONTRAR O ELEMENTO MAIS PROXIMO
        const pledgeInput = radioInput.closest(".pledge-input");
        pledgeInput.style.display = "grid"
        */
    })
})
