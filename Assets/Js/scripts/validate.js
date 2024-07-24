export const validateInput=(fullName,phoneNumbar,password)=>{
const fullNameRegex=/^[\u0600-\u06ff\s]+$/;
const phoneNumbarRgex=/^\d+$/;
const passwordRgex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/



if(!fullName || !phoneNumbar || !password){
    return false
}
if(!fullNameRegex.test(fullName) ){
    return false
}
if(!phoneNumbarRgex.test(phoneNumbar) ){
    return false
}
if(!passwordRgex.test(password) ){
    return false
}

return true;

}

// Store User Data In LocalStorage------

export const storeUser=(fullName,phoneNumbar,password)=>{
    const userData={
        fullName,
        phoneNumbar,
        password
    }

    localStorage.setItem('userData',JSON.stringify(userData))
}


// Validate Login Fields----------------

export const validateLogin=(fullName,password)=>{
    const passwordRgex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const storedUser=JSON.parse(localStorage.getItem('userData'))
    
    
    if( !fullName || !password){
        return false
    }
    
    if(!passwordRgex.test(password) ){
        return false
    }
    if(storedUser && storedUser.fullName===fullName && storedUser.password===password){
        return true
    }
    
    return false;
    
    }