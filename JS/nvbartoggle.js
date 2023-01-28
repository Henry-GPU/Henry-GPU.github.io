const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const navbarLinksA = document.getElementsByClassName('navbar-link');
toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active'); 
    for(let i = 0; i < navbarLinksA.length; i++){
        navbarLinksA[i].classList.toggle('active');
    }
})