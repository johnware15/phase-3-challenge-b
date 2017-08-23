const pgp = require('pg-promise')();
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp(CONNECTION_STRING)

const ordersByShopperId = id => {
  return db.any(`SELECT orders.id, SUM(grocery_items.price) AS total_cost
  FROM orders
  JOIN orders_items
  ON order_items.id = orders.id
  JOIN grocery_items
  ON grocery_items.id = order_items.items._id
  WHERE orders.shopper_id = '${id}'
  GROUP BY orders.id
  `)
}

const productsBySection = section => {
  return db.any(`SELECT name, section
    FROM grocery_items
    WHERE section = '${section}'
  `)
}


const realShoppers = () => {
  return db.any(`SELECT shoppers.firstname, COUNT(orders.id) FROM order_items
    JOIN orders
    ON orders.id = order_items
    JOIN shoppers
    ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.firstname
  `)
}

module.exports = {
  productsBySection,
  ordersByShopperId,
  realShoppers
}
