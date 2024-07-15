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
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
let all = document.querySelectorAll('.work_card');
let uiux = document.querySelectorAll('.uiux');
let apps = document.querySelectorAll('.app');
let branding = document.querySelectorAll('.branding');


indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px';

tabs.forEach((tab) =>{
    tab.addEventListener('click',()=>{
        indicator.style.width = tab.getBoundingClientRect().width + 'px';
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px';

        tabs.forEach(t => t.classList.remove('text-whiteColor'));
        tab.classList.add('text-whiteColor');

        let tabval = tab.getAttribute('data-tabs');

        all.forEach(item =>{
            item.style.display = 'none'
        });

        if(tabval == 'uiux'){
                uiux.forEach(item =>{
                item.style.display = 'block'
            });
        }else if(tabval == 'branding'){
            branding.forEach(item =>{
                item.style.display = 'block'
            })
        }
        else if(tabval == 'apps') {
            apps.forEach(item =>{
                item.style.display = 'block'
            })
        }else {
            all.forEach(item =>{
                item.style.display = 'block'
            });
        }

    })
})
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
