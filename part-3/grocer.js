const cartButton = document.getElementById("cart-button")
const cartCounter = document.getElementById("cart-item-count")
const modal = document.querySelector(".modal-container")
const modalOverlay = document.querySelector(".modal-overlay")
const closeButton = document.querySelector(".cart-close")
const showTotalPrice = document.querySelector(".modal-total-price")
const addToCartButton = document.querySelectorAll("li button")
const modalItems = document.querySelector(".modal-items-section")
const clearCartButton = document.querySelector(".modal-footer button")
let itemsArray = []
let totalPrice

function openModal() {
  modalOverlay.classList.add("show-modal")
  modal.classList.add("show-modal")
}

function closeModal() {
  modalOverlay.classList.remove("show-modal")
  modal.classList.remove("show-modal")
}

function getItemData(element) {
  let childNodes = element.target.parentElement.childNodes
  let name = childNodes[1].innerHTML
  let price = childNodes[3].innerHTML
  if (!name || !price) {
    alert("Something's not right!")
    return
  }
  itemsArray.push({name, price})
  cartCounter.innerHTML = itemsArray.length
  getTotalPrice()
  showTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)

  const modalItemsRow = document.createElement("DIV")

  const itemNameNode = document.createElement("SPAN");
  const itemNameTextNode = document.createTextNode(name);
  itemNameNode.appendChild(itemNameTextNode);
  modalItemsRow.appendChild(itemNameNode);

  const itemPriceNode = document.createElement("SPAN");
  const itemPriceAmtNode = document.createTextNode(price);
  itemPriceNode.appendChild(itemPriceAmtNode);
  modalItemsRow.appendChild(itemPriceNode);

  modalItems.appendChild(modalItemsRow);
}

function getSum(total, num) {
  num = Number(num.price[0]) ?
  Number(num.price) :
  Number(num.price.slice(1))
  return total + num
}

function getTotalPrice() {
  totalPrice = itemsArray.reduce(getSum, 0)
  return totalPrice
}

function clearCart() {
  while (modalItems.firstChild) {
    modalItems.removeChild(modalItems.firstChild);
  }
  itemsArray = []
  showTotalPrice.innerHTML = "$0.00"
  cartCounter.innerHTML = "0"
}

addToCartButton.forEach( addItemToCartButton => {
  addItemToCartButton.addEventListener("click", getItemData)
})
cartButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
clearCartButton.addEventListener("click", clearCart)
