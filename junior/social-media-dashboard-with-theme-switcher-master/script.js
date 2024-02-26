document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('toggle-theme-button');
    const currentTheme = localStorage.getItem('theme');
  
    // Se há um tema armazenado, aplicá-lo
    if (currentTheme) {
      body.classList.add(currentTheme);
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');
  
      // Armazenar a preferência do tema
      const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', theme);
    });
  });
  