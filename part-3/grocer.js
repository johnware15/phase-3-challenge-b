'use strict';

const cartButton = document.getElementById('cart-button')
const cartCount = document.getElementById('cart-item-count')
const modal = document.getElementById('modal')
const modalBox = document.getElementById('modal-box')
const closeModal = document.getElementsByClassName('close-modal')
const cartItems = document.getElementById('cart-items')
const clearCart = document.getElementById('clear-cart')
const cartPrice = document.getElementById('cart-price')

let items = []
let total
