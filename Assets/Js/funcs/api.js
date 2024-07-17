const fetchDoctorsList=()=>{
      //step 1:
  var xhttp = new XMLHttpRequest();

  //step 2:
  const BASE_URL="/Assets/json"

  //step 3:

  var url = `${BASE_URL}/doctorsList.json`;
  xhttp.open("GET", url);

  //step 4:
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      createMainBox(data);
    }
  };
}

const