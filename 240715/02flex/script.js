// Header Nav
window.addEventListener("scroll", () => {
  // let 쓴 이유 : scroll값에 따라 유동적으로 바뀌기 때문
  let scroll = window.scrollY;
  const header = document.querySelector("header");

  // scroll값에 따라 상단 헤더영역 색상변경
  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
