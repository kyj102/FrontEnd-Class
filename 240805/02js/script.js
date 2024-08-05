const Btn = document.querySelector(".descBtn");
Btn.addEventListener("click", function() {
  const desc = document.querySelector(".Btndesc");

  this.classList.toggle("active");
  desc.classList.toggle("active");
})