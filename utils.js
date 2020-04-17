// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  // should return a JSON object of item
  // return { name: name, price: price, quanity: 1 }
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current stateof shopping cart
  return shoppingCart
}

const addItemToShoppingCart = (item) => {
  // should add item to shopping cart
  for (let i = 0; i < shoppingCart.length; i++) {
    if (item.name === shoppingCart[i].name) {
      shoppingCart[i].quanity += item.quantity
    }
  }
  shoppingCart.push(item)
}

const removeItem = (item) => {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (item.name === shoppingCart[i].name) {
      shoppingCart.splice(i, 1);

    }
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  createItem, addItemToShoppingCart, removeItem, clearCart, getShoppingCart 
}
