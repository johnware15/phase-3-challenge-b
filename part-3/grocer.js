'use strict';

const cartButton = document.getElementById('cart-button')
const cartCount = document.getElementById('cart-item-count')
const cartAdd = document.querySelectorAll('add-to-cart')
const modal = document.getElementById('modal')
const modalBox = document.getElementById('modal-box')
const closeModal = document.querySelectorAll('close-modal')[0]
const cartItems = document.getElementById('cart-items')
const clearCart = document.getElementById('clear-cart')
const cartPrice = document.getElementById('cart-price')

let cartNumber = 4
let cartList = [{name: "Tomatoes", price: 1.56}, {name: "Carrots", price: 2.88}, {name: "Cold Cuts", price: 1.47}, {name: "Pizza", price: 16.61}]
let total = 0.00

cartButton.addEventListener("click", () => {
  cartItems.innerHTML = "";
  itemsCount.forEach(item => {
    let li = document.createElement("li")
    let name = document.createTextNode(item.name + "        " + item.price)
    li.appendChild(name)
    cartItems.appendChild(li)
  })
  modal.style.display = "block"
})

cartCount.innerHTML = `(${cartNumber})`

cartAdd.forEach(button => {
  button.addEventListener("click", () => {
    cartNumber += 1
    cartCount.innerHTML = `(${cartNumber})`
    cartList.push({item: "Here's what you're adding!"})
    console.log(cartList);
  })
})

closeModal.addEventListener("click", () => {
  modal.style.display = "none;"
})

clearCart.addEventListener("click", () => {
  cartList = []
  cartCount = cartList
  total = 0;
  cartPrice.innerHTML = total
  cartNumber = 0
  cartCount.innerHTML = `(${cartNumber})`
})

cartList.forEach(item => () => {
  cartPrice = cartPrice + item.price
})
cartPrice.innerHTML = cartPrice
