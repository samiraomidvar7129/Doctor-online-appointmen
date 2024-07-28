document.addEventListener('DOMContentLoaded',()=>{

    const appointmentsList=document.getElementById('appointments');

    const appointments=JSON.parse(localStorage.getItem('appointments')) || [];
    console.log(appointments)

    if(appointments.length > 0){
       appointments.forEach(appointment=>{
        appointmentsList.innerHTML+=`
         <div class="appointments-items col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 d-flex flex-column justify-content-center align-items-center mt-3 py-3 h-100 ">
        <div class="d-flex  justify-content-between align-items-center my-2 w-100">
        <div>${appointment.doctorName}</div>
        <div>${appointment.doctorSpeciallity}</div>
        </div>
        <div class="d-flex  justify-content-between align-items-center my-2 w-100">
        <div>نام بیمار :</div>
        <div>${appointment.reservationFullName} </div>
        </div>
        <div class="d-flex  justify-content-between align-items-center my-2 w-100">
        <div> کد ملی :</div>
        <div>${appointment.nationalCode} </div>
        </div>
        <div class="d-flex  justify-content-between align-items-center my-2 w-100">
        <div> تاریخ حضور  :</div>
        <div>${appointment.reserveDate} </div>
        </div>
        <div class="d-flex  justify-content-between align-items-center my-2 w-100">
        <div> ساعت حضور  :</div>
        <div>${appointment.reserveTime} </div>
        </div>
        <div Class= w-100 mt-4"><button class="  appointments-items_btn  py-2 w-100" >حذف نوبت</button></div>
        </div>
        
        `
       })

      
    }else{
        appointmentsList.innerHTML="هیچ نوبتی  ثبت نشده است"
    }
})

