// Validate ReservationForm Fields----------------->

 export const validatetReservationForm=(event)=>{
    event.preventDefault()
    
  
  
    const reservationFullName=document.getElementById('reservation-fullName').value;
    const reservationPhone=document.getElementById('reservation-phoneNumber').value;
    const nationalCode=document.getElementById('national-code').value;
    const reserveDate=document.getElementById('reserve-date').value;
    const reserveTime=document.getElementById('reserve-time').value;

    if(!reservationFullName || !reservationPhone || !nationalCode || !reserveDate || !reserveTime){
        swal({
          title: "خطا",
          text: "کاربرگرامی ! برای ثبت نوبت لطفا اطلاعات را تکمیل کنید",
          icon: "error",
          button: "باشه",
        })
        return; 
      }
  
  
    const ReservationFormData = {
        reservationFullName,
        reservationPhone,
        nationalCode,
        reserveDate,
        reserveTime
    };
  
    localStorage.setItem("UserReservations", JSON.stringify(ReservationFormData));
    swal({
      title: "نوبت شما با موفقیت ثبت شد",
      text: "    برای اطلاع از نوبت های خود به بخش رزروهای من مراجعه کنید",
      icon: "success",
      button: "خیلی ممنون",
    }).then(()=>{
      window.location.href="index.html"
    })
  
  }

  