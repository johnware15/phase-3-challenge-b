const chai = require('chai');
const assert = chai.assert

const {
  productsBySection,
  ordersByShopperId,
  realShoppers
} = require('./database.js')

describe('productsBySection(section)', ()=> {
  it('tests the command `product-list`', ()=> {
    return productsBySection('dairy')
    .then(results => {
      assert(results[0]["name"], 'Butter')
      assert(results[1]["name"], 'Cheese')
      assert(results[1]["section"], 'dairy')
      assert(results[4]["section"], 'dairy')
    })
  })
})

describe('realShoppers()', ()=> {
  it('tests the command `real-shoppers`', ()=> {
    return realShoppers()
    .then(results => {
      assert(results[0]["firstname"], 'Jon')
      assert(results[3]["firstname"], 'Dany')
      assert(results[0]["count"], '2')
      assert(results[1]["count"], '2')
    })
  })
})

describe('ordersByShopperId(id)', ()=> {
  it('tests for the command `shopper-orders`', ()=> {
    return ordersByShopperId('2')
    .then(results => {
      assert(results[0]["id"], '2')
      assert(results[1]["id"], '7')
    })
  })
})
