let navWrapper =  document.querySelector('.mNav-wrapper');
let navToggler = document.querySelector('.mNav-toggler');
let closeMenuBtn = document.querySelector('.close-nav-btn');
let navbar = document.querySelector('.mNavbar');
let navLinks = document.querySelectorAll('.nav-link');


// for scroll
document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200){
        navbar.classList.add('scrolledDown');
    }else{
        navbar.classList.remove('scrolledDown');
    }
});

// for opening and closing the menu
navToggler.addEventListener('click', function(){
    navWrapper.classList.add('open');
});

closeMenuBtn.addEventListener('click', function(){
    navWrapper.classList.remove('open');
});

