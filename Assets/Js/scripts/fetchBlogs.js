import {axiosInstance} from './axiosConfig.js';

export const fetchBlogs=()=>{
    return axiosInstance.get('blogs.json')
    .then(response=>response.data)
    .catch(error=>{
        console.error('Error Fetching blogs:', error)
        throw error;

    })
}