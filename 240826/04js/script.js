import env from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`;

fetch(url)
.then((response) => response.json())
.then((data) => {
  const icon = document.querySelector(".icon");
  const temp = document.querySelector(".temp");
  const weather = document.querySelector(".weather");
  const city = document.querySelector(".city");

  let weatherName;
  switch (data.weather[0].main) {
    case "Clouds": 
    weatherName = "구름";
    break;
    case "Rain": 
    weatherName = "비";
    break;
  };

  let cityName;
  switch (data.name) {
    case "Jamwon-dong": 
    cityName = "서울시";
    break;
  };

  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temp.innerText = `${data.main.temp} ℃`;
  weather.innerText = weatherName;
  city.innerText = cityName;
  console.log(data);
}) 
};

// 사용자가 위치허용시 위도와 경도를 찾아와주는 함수(정상적으로 데이터를 찾아왔을때)
const getPosition = (position) => {
  const {latitude, longitude} = position.coords;
  getCurrentWeather(latitude, longitude);
};

// 사용자가 위치허용을 하지 않았을시(정상적으로 데이터를 찾아오지 못했을때)
const errorHandler = (err) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
  alert(err.message);
};

// 예외조항처리
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition ,errorHandler);
} else {
  alert("Geolocation is not Available!");
}