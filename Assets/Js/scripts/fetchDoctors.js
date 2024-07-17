import {axiosInstance} from './axiosConfig';

export const fetchDoctorsList=()=>{
    return axiosInstance.get('doctorsList.json')
    .then(response=>response.data)
    .catch(error=>{
        console.error('Error Fetching DoctorsList:', error)
        throw error;

    })
}