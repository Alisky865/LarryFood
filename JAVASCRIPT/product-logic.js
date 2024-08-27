 //import {cart} from '\My Codes\My Codes001\New Designs Codes\JAVASCRIPT\cart.js';

 //import {cart} from '\My Codes\My Codes001\New Designs Codes\JAVASCRIPT\ire product.js';*/
 

 let productHtml = ""; 

 allProducts.forEach((product)=>{
  
  productHtml += `
   <div class="all-menu-items">
     <div>
       <img src="${product.image}" class="productsImg">
     </div>
     <div class="productsName">${product.name}</div>
     <div class="productsPricing">N${(product.pricing).toLocaleString()}</div>
     <div class="quantity">
       <select class="quantity-select js-quantity-select-${product.id}">
         <option selected value ="1">1</option>
         <option value ="2">2</option>
         <option value ="3">3</option>
         <option value ="4">4</option>
         <option value ="5">5</option>
         <option value ="6">6</option>
         <option value ="7">7</option>
         <option value ="8">8</option>
         <option value ="9">9</option>
         <option value ="10">10</option>
       </select>
     </div>
     <div class="added added-${product.id}">
       <i class="fa-solid fa-check" id="check-icon"></i> Added
     </div>

     <button class="add-to-cart js-add-to-cart"
       data-product-id="${product.id}">
       Add To Cart
     </button> 
   </div>`;  

   });
   document.querySelector("#menu-box").innerHTML = productHtml; 









  let timeoutId ;
 function addedNotification(productId)
  {let timeoutId ;
    const addedNotification = document.querySelector
   (`.added-${productId}`);
   addedNotification.classList.add("added-opacity");

   clearTimeout(timeoutId);

   timeoutId = setTimeout(()=>
     {addedNotification.classList.remove("added-opacity");}, 2000);
  };


 document.querySelectorAll(".js-add-to-cart")
   .forEach((button)=>
     {button.addEventListener("click",
       ()=>{const productId = button.dataset.productId;
       
        addedNotification(productId);

        addTocart(productId);

        updateCartQuantity();

        saveToStorage();

        
      });
     });



