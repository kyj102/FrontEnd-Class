import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 14px;
background: rgba(245, 255, 255, 0.7);
padding: 50px;
border: 1px solid #fff;
border-radius: 28px;
`;

const City = styled.h1`
  font-size: 22px;
`;

const Weather = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #cd4cb6;
`;

const Desc = styled.h3`
  font-size: 26px;
`;

const WeatherBox = ({weather}) => {
  let cityName;
  switch(weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 잠원동";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Seoul":
      cityName = "대한민국 서울";
      break;
  }

  let weatherMain;
  switch(weather && weather?.weather[0].main) {
    case "Clear":
      weatherMain = "매우 맑음";
      break;
    case "Clouds":
      weatherMain = "구름";
      break;
    case "Mist":
      weatherMain = "안개";
      break;
    case "Rain":
      weatherMain = "비";
      break;
  }

  return (
    <Wrapper>
      <City>🏙️ 도시 : {cityName} </City>
      <Weather>
        🌈 온도 : {weather && weather?.main.temp}°C / 
        🌧️ 습도 : {" "} {weather && weather?.main.humidity}% 
        </Weather>
      <Desc>
      ☂️ 현재 날씨 : {weatherMain}
        </Desc>
    </Wrapper>
  );
};

export default WeatherBox
