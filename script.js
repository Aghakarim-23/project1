const shoppingBtn = document.getElementById("shoppingBtn");
const mainContainer = document.getElementsByClassName("mainContainer");

shoppingBtn.addEventListener("click", () => {
  mainContainer[0].classList.toggle("active");
});
