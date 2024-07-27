document.addEventListener('DOMContentLoaded',()=>{

    const appointmentsList=document.getElementById('appointments');

    if(appointmentsList){
        const appointments=JSON.parse(localStorage.getItem('UserReservations')) || [];

        if(appointments.length > 0){
            appointments.forEach(appointment => {
                appointmentsList.innerHTML+=`
                <div>${appointment.doctorName}</div>
                <div>${appointment.reservationFullName}
                </div>
                `
            });
        }else{
            appointmentsList.innerHTML="هیچ نوبتی  ثبت نشده است"
        }
    }
})