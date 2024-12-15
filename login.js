const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
const loginButton = document.getElementById('loginButton');
const signUpButton = document.getElementById('signUpButton');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = "index2.html";
});
signUpButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = "index2.html";
});
