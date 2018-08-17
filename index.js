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
      phrase+=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else{
    if(cart.length===2){
      phrase+=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and `
      phrase+=`${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    }
    else{
      phrase+=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `
      for(var x=1;x<=cart.length-2;x++){
        phrase+=`${cart[x].itemName} at $${cart[x].itemPrice}, `  
      }
      phrase+=`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    }
    }
  }
  else{
    phrase="Your shopping cart is empty."
  } 
  return phrase
}

function total() {
  // write your code here
  var total=0
  for(var x=0;x<cart.length-1;x++){
    total += cart[x].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
