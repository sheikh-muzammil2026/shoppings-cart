const productEl = document.getElementById("product");
const quantityEl = document.getElementById("quantity");
const cartContainer = document.getElementById("cart-container");

document.getElementById("btn-add").addEventListener("click", function () {

  // get value
 const productName = productEl.value;
const quantity = parseInt(quantityEl.value);

  // create div for adding content
  const cartContent = document.createElement("div");
  cartContent.classList.add("bg-base-200", "mt-5", "shadow" ,"rounded-md", "p-4");
  cartContent.innerText = `
  product name: ${productName} and quantity: ${quantity}
  `
  // cart add
  cartContainer.appendChild(cartContent);
  setToStorage(productName, quantity);
  
  productEl.value = "";
  quantityEl.value = "";
});

function setToStorage(product, quantity) {
// get old cart
 let oldCart = localStorage.getItem("cart");
//  console.log(oldCart);
  if(oldCart){
     let cartObj =  JSON.parse(oldCart);
    
    if(cartObj[product]){
      cartObj[product] += quantity;
      let cart = JSON.stringify(cartObj);
      localStorage.setItem("cart", cart);
    }else{
      cartObj[product] = quantity;
      let cart = JSON.stringify(cartObj);
      localStorage.setItem("cart", cart);
    };
   
  }else{
    // set new item
  let cartObj = {};
  cartObj[product] = quantity;
  let newCart = JSON.stringify(cartObj);
  localStorage.setItem("cart", newCart);
  };
  
};