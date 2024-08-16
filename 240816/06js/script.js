const btn = document.querySelector("#tweetButton");

btn.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #david #SNS #js`

  // encodeURIComponent = 인간의 언어를 컴퓨터언어로 컴파일링해주는 함수
  const encodedText = encodeURIComponent(tweetText);
  
  const tweetURL = `http://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});