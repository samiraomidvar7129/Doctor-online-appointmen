document.addEventListener('DOMContentLoaded',()=>{
  const registerForm = document.getElementById("register_form--inner");
  const loginForm=document.getElementById('login_form--inner');
 

if(registerForm){
  registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    validatetRegisterForm();
  })
}

if(loginForm){
  loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateLoginForm();
  })
}
})

const validatetRegisterForm=()=>{
     const fullName=document.getElementById('register-fullName').value;const phoneNumber=document.getElementById('register-number').value;const password=document.getElementById('register-password').value;
    const fullNameError=document.querySelector('.fullName-error');
    const phoneError=document.querySelector('.phone-error');
    const passwordError=document.querySelector('.password-error');

    if(!fullName || !phoneNumber || !password){
    swal({title: "خطا", text: "کاربرگرامی ! لطفا تمامی فیلد ها را تکمیل کنید",icon: "error", button: "باشه", })
    return}
  
    if( fullName.length < 4 ){ fullNameError.textContent="نام باید بین ۳  تا ۱۰ و شامل حروف و اعداد و زیرخط باشد";} 
else{
  fullNameError.textContent="";
}
if(!isNaN(phoneNumber) || phoneNumber.length  > 11 || phoneNumber.length  < 11 ){
  phoneError.textContent="شماره تماس باید یک عدد ۱۱ رقمی باشد";
}
else{
  phoneError.textContent="";
}
if( password.length > 16 || password.length < 8 ||
!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)
)
  {
    passwordError.textContent="رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر و شامل کاراکترهای خاص و اعداد باشد";
}else{
  passwordError.textContent="";
}

  if(fullName && phoneNumber && password){
 
    const userData={
      fullName,
      phoneNumber,
      password
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    swal({
      title: "(: موفق باشید",
      text: "کاربرگرامی ! ثبت نام شما با موفقیت انجام شد  ",
      icon: "success",
      button:"ورود"
    }).then(()=>{
      window.location.href="login.html"
      document.getElementById("register_form--inner").reset();//Reset RegisterForm
    
    });
  }


}

const validateLoginForm = () => {  const fullName = document.getElementById("login-fullName").value.trim(); const password = document.getElementById("login-password").value.trim();
  if (!fullName || !password){
    swal({title: "خطا",text: "کاربرگرامی ! لطفا تمامی فیلد ها را تکمیل کنید",icon: "error", button: "باشه",})
    return};  
const getStoredUser = JSON.parse(localStorage.getItem("userData"));
  if (!getStoredUser)swal({title: "خطا",text: "متاسفانه کاربر یافت نشد",icon: "error", button: "دوباره امتحان میکنم",});
  if (getStoredUser.fullName === fullName &&getStoredUser.password === password) {swal({ title: "خوش آمدید", text: "با موفقیت وارد شدید   ",icon: "success", button: "  آخ جوووووون",}).then(()=>{window.location.href="index.html"}); return;} else {swal({ title: "لطفا دقت کنید   ", text: " نلم کاربری یا رمز عبور نادرست است",icon: "error", button: "دوباره تلاش میکنم ", })
     return }};
document.addEventListener("DOMContentLoaded", () => {const registerForm = document.getElementById("register_form--inner");if (registerForm) {registerForm.addEventListener("submit", validatetRegisterForm); };const loginForm = document.getElementById("login_form--inner");
  if (loginForm) { loginForm.addEventListener("submit", validateLoginForm);}});



  