var myData;

document.addEventListener("DOMContentLoaded", function () {
  //step 1:
  var xhttp = new XMLHttpRequest();

  //step 2:
   
  var url="/Assets/json/ghalb.json";
  xhttp.open("GET", url);

  //step 3:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data =JSON.parse(xhttp.responseText);
      myData=data
      createItems(myData)
    }
  };
  xhttp.send();
});

    function createItems(myData){

        const urlParams=new URLSearchParams(window.location.search);
    
        const group =urlParams.get('group')  //return query string

        for(const index in myData.doctors){

         if(group === myData.doctors[index].id){
            document.getElementById('doctor-title').innerHTML=myData.doctors[index].Name;
            document.getElementById('doctor-Speciallity').innerHTML=myData.doctors[index].Speciallity;
            document.querySelector('.location-text').innerHTML=myData.doctors[index].city;
            document.querySelector('.doctor-address').innerHTML=myData.doctors[index].address;
            document.getElementById('nezamCode').innerHTML=myData.doctors[index].NezamCode;
            document.getElementById('doctor-image').setAttribute('src',myData.doctors[index].ImageUrl)
         }

        }
    }
  

   


