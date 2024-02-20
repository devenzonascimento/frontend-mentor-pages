const openButton = document.querySelector("#back-btn");
const closeButton = document.querySelector("#icon-close-modal");

const modal = document.querySelector(".selection-modal")

openButton.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})