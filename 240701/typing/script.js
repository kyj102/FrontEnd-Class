const content =
  "Hi!🙋‍♀️ I'm YEJI, \n Front-End Developer. \n Welcome to My World :D";

const text = document.querySelector(".text");

/* 증감연산자 */
let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt; /*삼항조건연산자 */

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 250);
