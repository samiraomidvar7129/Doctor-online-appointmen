
//  const BASE_URL = "/Assets/json";

const fetchDoctorsList = async () => {
 
  try {
    const response = await axios.get('./Assets/json/doctorsList.json');

    console.log(response.data)

    // return response.data;
  } catch (error) {
    console.error("Error fetching doctorsList");
  }
};
// const fetchComments = async () => {

  
//     try {
//       const response = await axios.get(`${BASE_URL}/comments.json`);
  
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching comments");
//     }
//   };

//   const fetchBlogs = async () => {

  
//     try {
//       const response = await axios.get(`${BASE_URL}/blogs.json`);
  
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching blogs");
//     }
//   };
  
  


export default{fetchDoctorsList}