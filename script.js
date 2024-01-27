const shoppingBtn = document.getElementById("shoppingBtn");
const mainContainer = document.getElementsByClassName("mainContainer");
const myBag = document.getElementById('myBag')

shoppingBtn.addEventListener("click", () => {
  mainContainer[0].classList.toggle("active");
  myBag.classList.toggle("active")

});
const chevronButton = document.getElementById('chevron-button')
const currencyMenu = document.getElementById("currency-menu")
chevronButton.addEventListener("click", () => {
currencyMenu.classList.toggle('hidden')
})

window.addEventListener("click", (e)=>{
 if( e.target!=chevronButton) currencyMenu.classList.add('hidden')
})

window.addEventListener("click", (e) => {
  if(e.target != shoppingBtn)
   mainContainer[0].classList.remove('active')

} ) 
window.addEventListener("click", (e) => {
  if(e.target != shoppingBtn) myBag.classList.remove('active')
} ) 