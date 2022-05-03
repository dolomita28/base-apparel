const button = document.querySelector('.btn');
const inputEmail = document.querySelector('.mail');
const validator = document.querySelector('.validator');
const errIcon = document.querySelector('.error');
//regexp to validate e-mail
const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//show validator messages and icon alert
const notValid = ()=>{
    validator.classList.remove('hidden');
    errIcon.classList.remove('hidden');
}
//hides validator messages
const valid = () => {
    validator.classList.add('hidden');
    errIcon.classList.add('hidden');
}
//listen to click event
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const mail = inputEmail.value;
    if (regExp.test(mail)){
        valid();
    }
    else {
        notValid();
    }
})
//clear possible error messages
inputEmail.addEventListener('input',valid);