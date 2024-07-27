// Validate ReservationForm Fields----------------->

 export const validatetReservationForm=(event)=>{
    event.preventDefault()
    
    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get("group"); //Get doctorId From Url
    const doctorName = urlParams.get("doctorName"); //Get doctorName From Url

  
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
      group:group,
doctorName:doctorName,
        reservationFullName,
        reservationPhone,
        nationalCode,
        reserveDate,
        reserveTime
    };
  
    localStorage.setItem("UserReservations", JSON.stringify(ReservationFormData));
    swal({
      title: `نوبت شما برای ${doctorName} ثبت شد`,
      text: "    برای اطلاع از نوبت های خود به بخش رزروهای من مراجعه کنید",
      icon: "success",
      button: "خیلی ممنون",
    }).then(()=>{
      window.location.href="myReservations.html"
    })



  
  }

  