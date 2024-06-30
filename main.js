/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
let hamburger = document.getElementById('hamburger');
let navMenu = document.getElementById('nav-menu');
let navLink = document.querySelectorAll('.nav-link');
let closeIcon = document.getElementById('nav-close');

navLink.forEach((link) => {
    link.addEventListener('click',() => {
        navMenu.classList.add('hidden')
    })
})

closeIcon.addEventListener('click',() => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener('click',() => {
    navMenu.classList.remove('hidden')
})

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
let html = document.querySelector('html');
let themeBtn = document.getElementById('theme-toggle');


// while the page loads or reloads
if(localStorage.getItem('mode') == 'dark'){
    darkMode();
}else{
    lightMode();
}

// when pressing the button of moon or sun
themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('mode') == 'light'){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode(){
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line','ri-sun-line');
    localStorage.setItem('mode','dark');
}

function lightMode(){
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line','ri-moon-line');
    localStorage.setItem('mode','light');
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
