let opens = document.querySelector(".open");
let close = document.querySelector(".close");
let modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "block";
  console.log("open");
}

function closeModal() {
  modal.style.display = "none";
  console.log("close");
}
