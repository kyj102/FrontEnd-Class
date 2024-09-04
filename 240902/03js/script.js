anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime ({
  targets: ".box2",
  translateX: 250,
  translateY: 250,
  easing: "easeInQuart",
  duration: 1000,
  loop: true,
  direction: "alternate",
});

anime({   
  targets: ".box3",
  translateX: {   // 각각의 값을 객체형태로 쪼개서 지정할 수 있다
    value: 400,   // 공통값이 아닌, x축으로 이동될 때에만 적용되는 값
    delay: 1000,
    duration: 1000,
  },
  rotate: {
    value: 360,
    delay: 1000,
    duration: 1200,
  },
});