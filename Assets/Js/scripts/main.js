import{fetchDoctorsList} from './fetchDoctors.js';
import {fetchComments} from './fetchComments.js';
import {fetchBlogs} from './fetchBlogs.js';
import {displayDoctors,displayComments,displayBlogs} from './displayData.js';


document.addEventListener('DOMContentLoaded',()=>{
    Promise.all([
        fetchDoctorsList(),
        fetchComments(),
        fetchBlogs()  
    ])
    .then(([doctors,comments,blogs])=>{
        displayDoctors(doctors),
        displayComments(comments),
        displayBlogs(blogs)
    })
})