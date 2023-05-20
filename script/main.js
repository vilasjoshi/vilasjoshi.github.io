const container = document.getElementById('container');
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Add event listener to toggle the theme on button click
themeToggle.addEventListener('click', function() {
  // Get the body element
  const body = document.body;
  
  // Toggle the 'dark' class on the body element
  body.classList.toggle('dark');
});
