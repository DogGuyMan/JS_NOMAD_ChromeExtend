const API_KEY = "dc28f96037513dad1dbb84fff12aba2f";

function goGeoOK(pos){
  const crd = pos.coords;
  let lat = crd.latitude;
  let long = crd.longitude;
  console.log(lat, long);
  console.log(assemURL(lat,long,API_KEY));
  fetch(assemURL(lat,long,API_KEY))
  .then((response) => response.json())
  .then((data) => {
    const cloudStatus = data.weather[0].main;
    const cityName = data.name;
    const weatherElement = document.querySelector("div.weather-div");
    const statusSpanElement =  weatherElement.querySelector("span:nth-child(1)");
    const cityNameSpanElement = weatherElement.querySelector("span:nth-child(2)");
    statusSpanElement.innerText = cloudStatus;
    cityNameSpanElement.innerText = cityName; 
  });
}
function onGeoError(){
  alert("Geo Error can't FIND");
}

navigator.geolocation.getCurrentPosition(goGeoOK, onGeoError);

function assemURL(_lat, _long, _API){
  let resURL = `https://api.openweathermap.org/data/2.5/weather?lat=${_lat}&lon=${_long}&appid=${_API}`;
  resURL += "&units=metric";
  return resURL;
}
