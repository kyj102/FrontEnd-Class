const imageAll = document.querySelectorAll(".parallaxImg");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  
  if(scrollNum < 2800) {
    imageAll.forEach((item, index) => {
      item.style.transform = `translate3d(0, 0, ${scrollNum / (3 * (totalNum - index))}px)`;
    })
  }
});