let result

const ratingButtons = document.querySelectorAll(".rating-btn");

ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        ratingButtons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove("active");
                otherButton.style.backgroundColor = "";
                otherButton.style.color = "";
            }
        });

        button.classList.toggle("active");

        //Aplicar estilos ao botão clicado, se necessário
        if (button.classList.contains("active")) {
            button.style.backgroundColor = "hsl(217, 12%, 63%)";
            button.style.color = "white";
            result = button.innerText
        } else {
            button.style.backgroundColor = "";
            button.style.color = "";
        }
    });
});

function thankYouState() {
    
    if (result != 0) {
        document.getElementsByClassName("rating-state")[0].style.display = "none";

        document.getElementById("note").innerHTML = result
        document.getElementsByClassName("result-state")[0].style.display = "flex";
    }
}

