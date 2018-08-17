var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100)
 var bject = {itemName:item,itemPrice:price}
//   bject[itemName]=item
//   bject[itemPrice]=price
 
 cart.push(bject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var phrase=''
  if(cart.length>0){
    if(cart.length===1){
      phrase+=`In you cart, you have ${cart[0][itemName]} at ${cart[0][itemPrice]}.`
    }
    else{
      phrase+=`In you cart, you have ${cart[0][itemName]} at ${cart[0][itemPrice]}, and `
      for(var x=1;x<cart.length-2;x++){
        phrase+=`${cart[x][itemName]} at ${cart[x][itemPrice]}, and `  
      }
      phrase+=`${cart[cart.length-1][itemName]} at ${cart[cart.length-1][itemPrice]}.`
    }
  }
  else{
    phrase="Your shopping cart is empty."
  } 
  return phrase
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
