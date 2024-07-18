// 자세히 보기 버튼 클릭 시 토글 기능
// const toggleButton = document.getElementById('toggleInfo');
// const moreInfoBox = document.getElementById('moreInfo');

// toggleButton.addEventListener('click', function() {
//     if (moreInfoBox.style.display === 'none' || moreInfoBox.style.display === '') {
//         moreInfoBox.style.display = 'block';
//         toggleButton.textContent = '간단히 보기';
//     } else {
//         moreInfoBox.style.display = 'none';
//         toggleButton.textContent = '자세히 보기';
//     }
// });

// 1. view버튼을 클릭했을때 modal contents창이 나오도록 한다.
// 2. modal창의 close버튼을 닫으면 다시 메인 창으로 돌아갈 수 있도록 한다.
// const btn = document.querySelectorAll(".view");


// 모든 view 버튼들을 선택
var viewButtons = document.querySelectorAll('.view');

// 각 버튼에 대해 클릭 이벤트 리스너 등록
viewButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var modalId = button.getAttribute('data-target'); // 해당 버튼의 data-target 값을 가져옴
    var modal = document.getElementById(modalId); // 해당하는 모달을 선택

    // 모달 표시
    modal.style.display = 'block';

    // 모달 내부의 닫기 버튼 선택
    var closeBtn = modal.querySelector('.close');

    // 모달 닫기 버튼 클릭 이벤트 리스너 등록
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none'; // 모달 숨김
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none'; // 모달 숨김
      }
    });
  });
});


//footer 애니메이션
document.addEventListener('DOMContentLoaded', function() {
  const footertitle = document.querySelector('.footer_title');

  function checkScroll() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let textPosition = footertitle.getBoundingClientRect().top;

    if (textPosition < windowHeight * 0.75) {
      footertitle.classList.add('show');
    } else {
      footertitle.classList.remove('show');
    }
  }

  window.addEventListener('scroll', checkScroll);
});