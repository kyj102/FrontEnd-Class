const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 =["CSS", "JavaScript", "React"];
const member3 = ["JavaScript", "React"];

const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

result.innerHTML = `
  <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`

console.log(resultList);