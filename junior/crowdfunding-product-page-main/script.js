const selectionModal = document.querySelector(".selection-modal")

const openButton = document.querySelector("#back-btn");
openButton.addEventListener("click", () => {
    selectionModal.showModal()
})
const closeButton = document.querySelector("#icon-close-modal");
closeButton.addEventListener("click", () => {
    selectionModal.close()
})


const continueButtons = document.querySelectorAll(".continue-btn");
continueButtons.forEach(button => {
    button.addEventListener("click", () => {
        const successModal = document.querySelector(".success-modal")
        successModal.showModal()
        selectionModal.close()
    })
})


const radioInputs = document.querySelectorAll(".radio-input");
radioInputs.forEach(radioInput => {
    radioInput.addEventListener("change", () => {
        
        removeInputStyles(document.querySelectorAll(".input-container"))
        // Adiciona o efeito de Borda no Input
        const inputContainer = radioInput.closest(".input-container");
        inputContainer.classList.add("border-active")

        hideInputContainers(document.querySelectorAll(".pledge-input"))
        // Mostra o Input
        const pledgeInput = radioInput.parentNode.nextElementSibling;
        pledgeInput.style.display = "grid"
        
    })
})
function removeInputStyles(inputElement) {
    inputElement.forEach(input => {
        input.classList.remove("border-active")
    })    
}
function hideInputContainers(inputElement) {
    inputElement.forEach(input => {
        input.style.display = "none"
    })
}


const iconMenu = document.querySelector(".icon-menu")
iconMenu.addEventListener("click", () => {  
    iconMenu.classList.toggle("close")
    if (iconMenu.classList.contains("close")) {
        document.querySelector("nav").style.display = "flex"
        createBackdrop()
    } else {
        document.querySelector("nav").style.display = "none"
        removeBackdrop()
    }
})
function createBackdrop() {
    if (!document.querySelector(".backdrop")) {
        const backdrop = document.createElement("div")
        backdrop.classList.add("backdrop")
        document.body.appendChild(backdrop)
    }
}
function removeBackdrop() {
    if (document.querySelector(".backdrop")) {
        document.querySelector(".backdrop").remove()
    }
}