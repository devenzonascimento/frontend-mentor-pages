const menu = document.querySelector("nav")
const iconMenu = document.querySelector("#icon-menu")
const iconMenuClose = document.querySelector("#icon-menu-close")
const overlay = document.createElement("div")
overlay.classList.add("overlay")

iconMenu.addEventListener("click", () => {
    menu.style.display = "flex"
    document.body.appendChild(overlay)
})

iconMenuClose.addEventListener("click", () => {
    menu.style.display = "none"
    menu.style.width = "70vw"
    overlay.remove()
})