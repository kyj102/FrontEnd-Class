const showPosition = (position) => {
  const url = "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=UL0r2N4lm9XMPyulTuwkL4o2BtkpRBGcZIhi%2Bqu%2FiiXV0RDwfDlcL2N7xwRe9uSRZPsGs5qyQH95pUtwtI0vdw%3D%3D&_type=json";

  fetch(url)
  .then(response => response.json())
  .then(json => {
    const data = json.response.body.items.item;
    console.log(data);
    const { latitude, longitude } = position.coords;
  
    const mapContainer = document.querySelector("#map");
    const mapOption = { 
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };
  
  const map = new kakao.maps.Map(mapContainer, mapOption); 
  
  const clusterer = new kakao.maps.MarkerClusterer({
    map: map, 
    averageCenter: true, 
    minLevel: 10 
  });
  
  // const positions = [
  //   {
  //     title: '이젠아카데미', 
  //     latlng: new kakao.maps.LatLng(latitude, longitude)
  // },
  //   {
  //       title: '그린아카데미', 
  //       latlng: new kakao.maps.LatLng(37.5001276, 127.0290304)
  //   },
  //   {
  //       title: 'SBS아카데미', 
  //       latlng: new kakao.maps.LatLng(37.4979437, 127.0265374)
  //   },
  //   {
  //       title: '코리아IT아카데미', 
  //       latlng: new kakao.maps.LatLng(37.4999467, 127.0354264)
  //   },
  //   {
  //       title: '하이미디어아카데미',
  //       latlng: new kakao.maps.LatLng(37.4987358, 127.0266779)
  //   },
  // ];
  
  let markers = [];
  
  // 마커 생성
  for (var i = 0; i < data.length; i ++) {
    const marker = new kakao.maps.Marker({
        map: map, 
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
    });
  
    markers.push(marker);
  
    const infoWindow = new kakao.maps.InfoWindow({
      content: data[i].facltNm,
    });
  
    const makeOverListener = (map, marker, infoWindow) => {
      return () => {
      infoWindow.open(map, marker);
      };
    };
  
    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      }
    };
  
    kakao.maps.event.addListener(marker,
      "mouseover", 
      makeOverListener(map, marker, infoWindow)
    );
  
    kakao.maps.event.addListener(marker,
      "mouseout", 
      makeOutListener(infoWindow)
    );
  };
  
  clusterer.addMarkers(markers);
  });
};

const errorPostion = (err) => {
  alert(err.message);
};

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPostion);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다!");
}