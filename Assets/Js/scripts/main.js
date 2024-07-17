import{fetchDoctorsList} from './fetchDoctors';
import {fetchComments} from './fetchComments';
import {fetchBlogs} from './fetchBlogs';
import {displayDoctors,displayComments} from './displayData';


document.addEventListener('DOMContentLoaded',()=>{
    Promise.all([
        fetchDoctorsList(),
        fetchComments(),
        fetchBlogs()

        .then(([doctors])=>{
            displayDoctors(doctors),
            displayComments(comments)
        })
    ])
})