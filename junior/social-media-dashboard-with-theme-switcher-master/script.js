// Troca entre Light e Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleButton = document.getElementById('checkbox');
  const currentTheme = localStorage.getItem('theme');

  // Se há um tema armazenado, aplicá-lo
  if (currentTheme) {
    body.classList.add(currentTheme);
    
    if (currentTheme === 'light-theme') {
      toggleButton.checked = true
    }
    
  } else {
    body.classList.toggle('dark-theme');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Armazenar a preferência do tema
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  });
});

// Obtem os dados do JSON para carregar o conteudo
fetch("data.json").then((response) => {
  response.json().then(data => {
    loadSocialMediaStats(data.socialMediaData)
    loadOverviewStats(data.overviewData)
  })
})

// Carrega o conteudo da Social Media direto arquivo JSON
function loadSocialMediaStats(stats) {
  // Elementos do Container: Social Media Dashboard
  const socialMediaCards = document.querySelectorAll(".social-media-card")
  const platformIcon = document.querySelectorAll(".platform-icon-sm")
  const username = document.querySelectorAll(".social-media-username")
  const followersNumber = document.querySelectorAll(".social-media-followers")
  const followersText = document.querySelectorAll(".social-media-followers-text")
  const statsToday = document.querySelectorAll(".social-media-stats-today")

  for (let i = 0; i < socialMediaCards.length; i++) {
    platformIcon[i].setAttribute("src", stats[i].icon)
    username[i].innerHTML = stats[i].username
    followersNumber[i].textContent = stats[i].followers
    followersText[i].textContent = stats[i].followersText
    statsToday[i].textContent = stats[i].statsToday

    if (stats[i].comparison === "up") {
      let colorPositive = "hsl(163, 72%, 41%)"
      statsToday[i].style.color = colorPositive
    } else {
      let colorNegative = "hsl(356, 69%, 56%)"
      statsToday[i].style.color = colorNegative
    }

    let arrowIcon = document.createElement("img")
    arrowIcon.classList.add("arrow-icon")
    arrowIcon.setAttribute("src", stats[i].arrowIcon)
    statsToday[i].insertBefore(arrowIcon, statsToday[i].firstChild)
  }
}
// Carrega o conteudo do Overview direto arquivo JSON
function loadOverviewStats(stats) {
  // Elementos do Container: Social Media Dashboard
  const overviewCards = document.querySelectorAll(".overview-stats-card")
  const statsType = document.querySelectorAll(".stats-type-text")
  const statsNumber = document.querySelectorAll(".stats-number")
  const statsPercentage = document.querySelectorAll(".stats-percentage")
  const platformIcon = document.querySelectorAll(".platform-icon-ov")

  for (let i = 0; i < overviewCards.length; i++) {
    statsType[i].textContent = stats[i].type
    platformIcon[i].setAttribute("src", stats[i].icon)
    statsNumber[i].textContent = stats[i].number
    statsPercentage[i].textContent = stats[i].percentage
    
    if (stats[i].comparison === "up") {
      let colorPositive = "hsl(163, 72%, 41%)"
      statsPercentage[i].style.color = colorPositive
    } else {
      let colorNegative = "hsl(356, 69%, 56%)"
      statsPercentage[i].style.color = colorNegative
    }

    let arrowIcon = document.createElement("img")
    arrowIcon.classList.add("arrow-icon")
    arrowIcon.setAttribute("src", stats[i].arrowIcon)
    statsPercentage[i].insertBefore(arrowIcon, statsPercentage[i].firstChild)
  }
}
