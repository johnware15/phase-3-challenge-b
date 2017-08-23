const {
  productsBySection,
  orderByShopperId,
  realShoppers
} = require('./database.js');

let productSection = argument => {
  let productLength = `Product Name`.length
  let sectionLength = `Section`.length
  console.log(`|--------------+---------|`)
  console.log(`| Product Name | Section |`)
  console.log(`|--------------+---------|`)
  let list = productsBySection(argument)
    .then(items => {
      items.map(item => {
        console.log("| " +
          item.name +
          (" ").repeat(productLength - item.name.length) +
           " | " +
          item.section +
          (" ").repeat(sectionLength - item.section.length) + " | ")
      })
    })
    .then(()=> console.log( `|--------------+---------|` ) )
}

let ordersById = argument => {
  let orderLength = `order id`.length
  let costLength = `total cost`.length
  console.log(`|----------+------------|`)
  console.log(`| order id | total cost |`)
  console.log(`|----------+------------|`)
  let list = getOrdersByShopperId(argument)
    .then(items => {
      items.map(item => {
        console.log("| " +
          item.id +
          (" ").repeat(orderLength - item.id.toString().length) +
           " | " +
          (" ").repeat(costLength - item.total_cost.length) +
          item.total_cost +
          " | ")
      })
    })
    .then(()=> console.log( `|----------+------------|` ) )
}

let shoppers = () => {
  let shopperNameLength = `shopper name`.length
  let numberOrdersLength = `number of orders`.length
  console.log(`|--------------+------------------|`)
  console.log(`| shopper name | number of orders |`)
  console.log(`|--------------+------------------|`)
  let list = realShoppers()
    .then(items => {
      items.map(item => {
        console.log("| " +
          item.firstname +
          (" ").repeat(shopperNameLength - item.firstname.length) +
           " | " +
          (" ").repeat(numberOrdersLength - item.count.toString().length) +
          item.count +
          " | ")
      })
    })
    .then(()=> console.log( `|--------------+------------------|` ) )
}

let select = process.argv[2]
let argument = process.argv[3]

switch(select) {
  case "product-list": productSection(argument)
   break;
  case "shopper-orders": ordersById(argument)
    break;
  case "real-shoppers": realshoppers()
    break;
  default:

}
