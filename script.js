const shoppingBtn = document.getElementById("shoppingBtn");
const mainContainer = document.getElementsByClassName("mainContainer");
const myBag = document.getElementById('myBag')

shoppingBtn.addEventListener("click", () => {
  mainContainer[0].classList.toggle("active");
  myBag.classList.toggle("active")

});


