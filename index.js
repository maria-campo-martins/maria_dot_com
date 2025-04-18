var typed = new Typed("#my-name",{
    strings: ['Maria Campo Martins'],
    typeSpeed: 80
})

document.getElementById('theme-toggle').checked = false;
document.documentElement.setAttribute('data-theme', 'light');

document.getElementById('github-icon').addEventListener('click', function () {
    window.location.href = 'https://github.com/maria-campo-martins';
});

document.getElementById('linkedin-icon').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/maria-campo-martins-78b302251';
});

const toggle = document.getElementById('theme-toggle');
const cv = document.getElementById('cv-icon');
const github = document.getElementById('github-icon');
const linkedin = document.getElementById('linkedin-icon');

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  cv.src = isDark ? './images/cv-light.png' : './images/cv-dark.png';
  linkedin.src = isDark ? './images/linkedin-light.png' : './images/linkedin-dark.png';
  github.src = isDark ? './images/github-light.png' : './images/github-dark.png';
});


document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});
