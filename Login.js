const main = document.querySelector('.main');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginbutton = document.querySelector('.login-button');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    main.classList.add("active");
    
})
loginLink.addEventListener('click',()=>{
    main.classList.remove("active");

})

loginbutton.addEventListener('click',()=>{
    main.classList.add("active-popup");
})

iconClose.addEventListener('click',()=>{
    main.classList.remove("active-popup");
})