'use strict'

const pg = require('pg')
const database = new pg.Client('postgres://localhost:9876/grocery_store')
database.connect()

const productsBySection = section => {
  return database.any(`SELECT name, section
    FROM grocery_items
    WHERE section = '${section}'
  `)
}

const orderByShopperId = id => {
  return database.any(`SELECT orders.id, SUM(grocery_items.price) AS total_cost
  FROM orders
  JOIN orders_items
  ON order_items.id = orders.id
  JOIN grocery_items
  ON grocery_items.id = order_items.items._id
  WHERE orders.shopper_id = '${id}'
  GROUP BY orders.id
  `)
}

const realShoppers = () => {
  return database.any(`
    SELECT shoppers.firstname, COUNT(orders.id) FROM order_items
    JOIN orders
    ON orders.id = order_items
    JOIN shoppers
    ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.firstname
  `)
}

module.exports = {
  productsBySection,
  orderByShopperId,
  realShoppers
}
