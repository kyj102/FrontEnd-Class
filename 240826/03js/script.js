const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition. options);

    const options = {
      enableHighAccuracy: true,  // 위치값을 보다 더 상세하고 정확하게 반영해주는 속성
      maximumAge: 0,   // 0초만큼 이동한 위치의 최신값을 업데이트해주는 속성
      timeout: 5000,   // 데이터를 가져오는데 통신장애로 로딩이 5초간 지속되면 끊고 새로고침해주는 속성
    };

    let watchId = navigator.geolocation.watchPosition(   // watchPosition = 최초값에서 이동한 위도경도값을 새로고침
      showPosition, 
      errorPosition, 
      options
    );

    setTimeout(() => {
      navigator.getLocation.clearWatch()  // clearWatch = 30초 경과된 이후 위치변화가 없으면 실시간 위치정보값 가져오는 것을 중지한다.
    }, 30000)

  } else {
  alert("Geolocation을 지원하지 않습니다!");
}
});