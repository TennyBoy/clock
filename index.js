// Clock and Date

const updateTime = () => {
  // For Clock
  const now = new Date();
  const h = now.getHours().toString().padStart(2, 0);
  const m = now.getMinutes().toString().padStart(2, 0);
  const timeString = `${h}:${m}`;

  document.getElementById('clock').textContent = timeString;

  //For Date
  const day = now.getDay();
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const month = monthName[now.getMonth()];
  const year = now.getFullYear();

  // Get Ordinal Suffix
  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  const suffix = getOrdinalSuffix(day);
  const today = `${month} ${day}${suffix}, ${year}`
  document.getElementById('date').textContent = today;
}

setInterval(updateTime, 1);
updateTime();



// For DarkMode
let darkMode = localStorage.getItem('darkMode');
const themeToggle = document.querySelector('#themeChange');

const enableDarkMode = () => {
  document.documentElement.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.documentElement.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

themeToggle.addEventListener('click', () => {
  const currentMode = localStorage.getItem('darkMode');
  if (currentMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})