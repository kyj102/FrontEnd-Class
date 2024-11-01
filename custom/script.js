/* backgorund image change */

const bgImgs = ["bg_01.jpg", "bg_02.jpg", "bg_03.jpg", "bg_04.jpg", "bg_05.jpg"];

const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImg[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_decs");

fetch("./Data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;
    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)),
        url(./img2/${bgImgs[index]})`;
        contentTit.innerText = title;
        contentDesc.innerText = description;
      });
    });
  });