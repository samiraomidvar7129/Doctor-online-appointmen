import{fetchDoctorsList} from './fetchDoctors';

document.addEventListener('DOMContentLoaded',()=>{
    Promise.all([
        fetchDoctorsList()

        .then(([doctors])=>{
            displayDoctors(doctors)
        })
    ])
})