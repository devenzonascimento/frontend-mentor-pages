const shareButton = document.getElementById("icon-share");
const popUp = document.getElementById("pop-up");
let newicon = null;

shareButton.addEventListener("click", () => {
    shareButton.classList.toggle("active");

    if (window.innerWidth < 750) {
        if (shareButton.classList.contains("active")) {
            if (!newicon) {
                
                newicon = document.createElement("img");
                newicon.setAttribute("src", "images/icon-share.svg");
                newicon.style.backgroundColor = "hsl(210, 46%, 95%)";
                newicon.style.borderRadius = "50%";
                newicon.style.padding = "10px";
                newicon.classList.add("active");
            }

            
            popUp.style.display = "flex";
            popUp.appendChild(newicon);
        } else {
            
            if (newicon) {
                popUp.style.display = "none";
                popUp.removeChild(newicon);
            }
        }
    } else {
        if (shareButton.classList.contains("active")) {
            popUp.style.display = "flex";
            shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
        } else {
            popUp.style.display = "none";
            shareButton.style.backgroundColor = "";
        }
    }
});


