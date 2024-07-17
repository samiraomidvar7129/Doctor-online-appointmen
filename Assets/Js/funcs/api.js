import axios from "axios";

 //step 1:

 const BASE_URL = "/Assets/json";

const fetchDoctorsList = async () => {
 
  try {
    const response = await axios.get(`${BASE_URL}/doctorsList.json`);

    return response.data;
  } catch (error) {
    console.error("Error fetching doctorsList");
  }
};
const fetchComments = async () => {

  
    try {
      const response = await axios.get(`${BASE_URL}/doctorsList.json`);
  
      return response.data;
    } catch (error) {
      console.error("Error fetching doctorsList");
    }
  };
  const fetchBlogs = async () => {

  
    try {
      const response = await axios.get(`${BASE_URL}/doctorsList.json`);
  
      return response.data;
    } catch (error) {
      console.error("Error fetching doctorsList");
    }
  };
  
  


export default{fetchDoctorsList}