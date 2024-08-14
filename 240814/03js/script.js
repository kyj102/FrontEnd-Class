// Search Modal
const searchBtn = document.querySelector(".fa-magnifying-glass");
searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});

// 페이지의 아무 창이나 클릭해도 창이 사라지도록
document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

// Search Bar
const searchBar = document.querySelector(".search input[type='text']");

// 서치바 안팎으로 마우스 클릭시 hashTag On/Off
searchBar.addEventListener("focus", function() {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function() {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// Accordian Event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  // 1. 선택된 아이템 1개가 누구인지 알게 하는 함수(모두의 액티브를 제거)
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });

    // 2. 미선택 아이템 6개를 구별하기 위한 함수(반복문)
    titles.forEach((othertitle) => {
      if(othertitle !== title) {
        othertitle.classList.remove("active");
      }
    });

    // 4. 선택받은 아이템의 콘텐츠를 끌어오는 함수
    let content = title.nextElementSibling;

    // 3. 선택받은 애가 다시 클릭당하면 액티브 제거, 최초로 클릭받은 아이템에게는 액티브 부여
    // 5. 선택받은 아이템의 콘텐츠에  display 스타일을 부여해서 보여지도록 한다.
    if(title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});
console.log();