import { validateLogin } from "./validate.js";

document.getElementById().addEventListener('submit',(event)=>{
    event.preventDefault();

const fullName=document.getElementById('login-fullName').ariaValueMax.trim();
const password=document.getElementById('login-password').ariaValueMax.trim();



if(validateLogin(fullName,password)){
swal.fire('با موفقیت وارد شدید').then(()=>{
    window.location.href='index.html'
})
}else{
    swal.fire('شماره تماس یا رمز عبور اشتباه است')
}

})