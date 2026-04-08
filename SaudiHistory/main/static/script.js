const openBtn = document.getElementByClassName("openModal");
const closeBtn = document.getElementByClassName("closeModal");
const modal = document.getElementByClassName("modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});