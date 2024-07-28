

export const saveAppointmentToLocalStorage=(appointment)=>{
    const appointments=JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.push(appointment);

    localStorage.setItem('appointments',JSON.stringify(appointments))

}