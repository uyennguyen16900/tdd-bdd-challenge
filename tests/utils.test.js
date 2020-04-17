const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6)
  expect(area).to.be.a("number")
  expect(area).to.equal(30)
})

it("should return the perimeter of a 5 by 6 rectangle", function() {
  const perimeter = utils.perimeter(5, 6)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(22)
})

it("should return the area of a circle of radius 5", function() {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.equal(Math.PI*5*5)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
  expect(item.name).to.equal("apple")

})

it("Should return an array containing all items in cart", function() {
  const items = utils.getShoppingCart()
  expect(items).to.be.an("array")
  expect(items.length).to.equal(0)
})

it("Should add a new item to the shopping cart", function() {
  const starApple = utils.createItem("star apple", 1.99)
  utils.addItemToShoppingCart(starApple)
  const cart = utils.getShoppingCart()
  expect(cart[cart.length - 1]).to.have.property("name", "star apple")
  expect(cart[cart.length - 1]).to.have.property("price", 1.99)
  expect(cart[cart.length - 1]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart.length).to.equal(1)
})

it("Should remove items from cart", function() {
  const strawberry = utils.createItem("strawberry", 1.99)
  utils.removeItem(strawberry)

  // expect()
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")
  utils.clearCart()
  const cart = utils.getShoppingCart()
  expect(cart.length).to.equal(0)

it("Should return the total cost of all items in the cart")
