





// Validate Register Fields----------------->

   const validatetRegisterForm=(event)=>{
  event.preventDefault();


  const fullName=document.getElementById('register-fullName').value;
  const phoneNumber=document.getElementById('register-number').value;
  const password=document.getElementById('register-password').value;

  if(!fullName || !phoneNumber || !password){
    swal({
      title: "خطا",
      text: "کاربرگرامی ! لطفا تمامی فیلد ها را تکمیل کنید",
      icon: "error",
      button: "باشه",
    })
    return; 
  }


  const userData = {
    fullName,
    phoneNumber,
    password,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  swal({
    title: "از اعتماد شما سپاسگزاریم",
    text: " اطلاعات شما با موفقیت ثبت شد",
    icon: "success",
    button: " ورود",
  }).then(()=>{
    window.location.href="login.html"
  })

}




// Validate Login Fields-------------------->

const validateLoginForm = (event) => {
  event.preventDefault();

  const fullName = document.getElementById("login-fullName").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!fullName || !password) {
    swal({
      title: "خطا",
      text: "کاربرگرامی ! لطفا تمامی فیلد ها را تکمیل کنید",
      icon: "error",
      button: "باشه",
    })
    return; 
  }

  const getStoredUser = JSON.parse(localStorage.getItem("userData"));
  if (!getStoredUser) {
    swal({
      title: "خطا",
      text: "متاسفانه کاربر یافت نشد",
      icon: "error",
      button: "دوباره امتحان میکنم",
    })
    return; 
  }

  if (
    getStoredUser.fullName === fullName &&
    getStoredUser.password === password
  ) {
    swal({
      title: "خوش آمدید",
      text: "با موفقیت وارد شدید   ",
      icon: "success",
      button: "  آخ جوووووون",
    }).then(()=>{
      window.location.href="index.html"
    })
    return; 
  } else {
    swal({
      title: "لطفا دقت کنید   ",
      text: " نلم کاربری یا رمز عبور نادرست است",
      icon: "error",
      button: "دوباره تلاش میکنم ",
    })
    return 
   }
};




document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register_form--inner");
  if (registerForm) {
    registerForm.addEventListener("submit", validatetRegisterForm);
  }

  const loginForm = document.getElementById("login_form--inner");
  if (loginForm) {
    loginForm.addEventListener("submit", validateLoginForm);
  }
});
