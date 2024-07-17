import {axiosInstance} from './axiosConfig.js';

export const fetchComments=()=>{
    return axiosInstance.get('comments.json')
    .then(response=>response.data)
    .catch(error=>{
        console.error('Error Fetching comments:', error)
        throw error;

    })
}