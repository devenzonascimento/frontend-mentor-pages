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

        if (button.classList.contains("active")) {
            button.style.backgroundColor = "hsl(217, 12%, 63%)";
            button.style.color = "white";
            result = button.innerText
        } else {
            button.style.backgroundColor = "";
            button.style.color = "";
            result = null
        }
    });
});

function thankYouState() {
    
    if (result != null) {
        document.getElementsByClassName("rating-state")[0].style.display = "none";

        document.getElementById("note").innerHTML = result
        document.getElementsByClassName("result-state")[0].style.display = "flex";
    } else {
        alert("Choose a note!")
    }
}

