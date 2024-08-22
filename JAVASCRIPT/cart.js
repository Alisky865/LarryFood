//export const cart = [];

  let cart = JSON.parse(localStorage.getItem('cart')) ||
 
  [
   /*{productDetail: "a1",
   quantity: 2,},

   {productDetail: "a2",
   quantity: 2,},*/

  ];

  
  updateCartQuantity();

  renderCart();
 function renderCart()
   { let cartProd = '';

   cart.forEach((cartItem)=>
     {const itemId = cartItem.productDetail;
     let cartQtty = cartItem.quantity;
     
     let total = 0;
     let sameProduct = '';
     
     allProducts.forEach((product)=>
     {if(product.id === itemId){sameProduct = product};

     total = sameProduct.pricing * cartQtty;  
     });        

     cartProd += `
     <div class="cart-items-box 
     cart-items-box-sameProduct-${sameProduct.id}"
     data-product-id="${sameProduct.id}">
       <div id="prod-box">
         <div>
           <img src="${sameProduct.image}" class="cart-products-img" >
         </div>

         <div class="products-name">
         ${sameProduct.name}
         </div>
       </div>

       <div class="price-box">
         N${(sameProduct.pricing).toLocaleString()}
       </div>

       <div id="quantity-box">
         <button class="minus-Btn  js-minus-Btn"
         data-product-id="${sameProduct.id}">-</button>
         <div class="quantity js-quantity-${sameProduct.id}">${cartQtty}</div>
         <button class="plus-Btn js-plus-Btn"
         data-product-id="${sameProduct.id}">+</button> 
       </div>

       <div id="total-box">
         <div class="total js-items-total" data-product-id="${sameProduct.id}">N${total.toLocaleString()}</div>
         <button class="delete-Btn  js-delete-Btn"
         data-product-id="${sameProduct.id}">
           <i class="fa-solid fa-trash" id=""></i>
         </button>
       </div>    
     </div>`;
     
    });
   
   document.querySelector(".cart-container").innerHTML = cartProd;


   let sumTotal = 0;
   cart.forEach((item)=>
     {let itemId = item.productDetail;
      let qtty = item.quantity;

      let same = '';
      allProducts.forEach((product)=>
      {if(product.id === itemId){same = product}; });

      let total = same.pricing * qtty;

      sumTotal += total;

      
      /*let tax = 2.5;
      let shipping = 1500;
      let beforeTax = shipping + sumTotal;
      let estimatedTx = (tax/100) * beforeTax;
      let totalOrder = beforeTax + estimatedTx

      document.querySelector(".js-shipping").innerHTML = `N${(shipping).toLocaleString()}`;

      document.querySelector(".js-before-tax").innerHTML = `N${(beforeTax).toLocaleString()}`;

      document.querySelector(".js-estimated-tax").innerHTML = `Estimated Tax ( ${tax}% ) :`;

      document.querySelector(".js-estimated-tax-amount").innerHTML = `N${(estimatedTx).toLocaleString()}`;

      document.querySelector(".js-order-amount").innerHTML = `N${(totalOrder).toLocaleString()}`;*/
      
    });

    document.querySelector(".js-total-amount1").innerHTML = `N${(sumTotal).toLocaleString()}`;
    

   document.querySelectorAll('.js-delete-Btn').forEach((btn, i)=>
    {btn.addEventListener('click',()=>
     {//const sameId = btn.dataset.productId;
      cart.splice(i, 1);
      updateCartQuantity();
      saveToStorage();
      calcTotal()
      renderCart();
     })
    });

   function calcTotal()
    {let sumTotal = 0;
       


     cart.forEach((item)=>
     {let itemId = item.productDetail;
      let qtty = item.quantity;

      let same = '';
      let tax = 2.5;
      let shipping = 1500;
      let beforeTax = shipping + sumTotal;
      let estimatedTx = (tax/100) * beforeTax;
      let totalOrder = beforeTax + estimatedTx
      allProducts.forEach((product)=>
      {if(product.id === itemId){same = product}; });

      let total = same.pricing * qtty;

      sumTotal += total;

     

      document.querySelector(".js-shipping").innerHTML = `N${(shipping).toLocaleString()}`;

      document.querySelector(".js-before-tax").innerHTML = `N${(beforeTax).toLocaleString()}`;

      document.querySelector(".js-estimated-tax").innerHTML = `Estimated Tax ( ${tax}% ) :`;

      document.querySelector(".js-estimated-tax-amount").innerHTML = `N${(estimatedTx).toLocaleString()}`;

      document.querySelector(".js-order-amount").innerHTML = `N${(totalOrder).toLocaleString()}`;
      
    });}


   const minus = document.querySelectorAll('.js-minus-Btn');
    minus.forEach((minusBtn,i)=>
     {minusBtn.addEventListener('click',()=>
       {let minusId = minusBtn.dataset.productId;
         cart.forEach((item)=>
         {if(minusId === item.productDetail) {minusId = item}; });
    
         if(minusId) {minusId.quantity -= 1 };

         if (minusId.quantity <= 0){cart.splice(i,1)};

         updateCartQuantity();
         saveToStorage();
         renderCart();
        })
      }
    );


   const plus = document.querySelectorAll('.js-plus-Btn');
     plus.forEach((plusBtn)=>
       {plusBtn.addEventListener('click',()=>
         {let plusId = plusBtn.dataset.productId;
           cart.forEach((item)=>
           {if(plusId === item.productDetail) {plusId = item}; });
    
           if(plusId) {plusId.quantity += 1 };

           updateCartQuantity();
           saveToStorage();
           renderCart();
          });
        }
      );



  };
  

 function addTocart(productId)
   {let matchingItem ;

   const selectorValue = document.querySelector(`.js-quantity-select-${productId}`).value ;

   const quantityValue = Number(selectorValue);

   cart.forEach((item)=>
    {if(productId === item.productDetail)
    {matchingItem = item;};
    });

    if(matchingItem)
    {matchingItem.quantity += quantityValue;}
    


   else{cart.push({
      productDetail: productId,
      quantity: quantityValue,
      });
    };

    saveToStorage();

  };

  function updateCartQuantity()
  {let cartQuantity = 0;
    cart.forEach((item)=>{cartQuantity += item.quantity;});

   document.querySelectorAll('.cartQuantityCounts')
     .forEach((counts)=>{counts.innerHTML = cartQuantity});

   document.querySelector('#items-count').innerHTML = `Items ( ${cartQuantity} ) :`;

  };

  function saveToStorage()
  {localStorage.setItem('cart', JSON.stringify(cart));}


