fetch("data.json").then((response) => {
    response.json().then((stats) => {

      var icon = document.querySelectorAll(".icon")
      var category = document.querySelectorAll(".category")
      var score = document.querySelectorAll(".score")

      for(var i = 0; i < icon.length; i++) {
        icon[i].setAttribute("src", stats[i].icon);
        category[i].textContent = stats[i].category;
        score[i].textContent = stats[i].score;
      }
    })
  });  