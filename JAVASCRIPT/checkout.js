

let sumTotal = 0;
    let total = 0;
    
    cart.forEach((item)=>
     {let itemId = item.productDetail;
      let qtty = item.quantity;

      let same = '';
      allProducts.forEach((product)=>
      {if(product.id === itemId){same = product};

       total = same.pricing * qtty; });

      sumTotal += total;
      
      let tax = 2.5;
      let shipping = 1500;
      let beforeTax = shipping + sumTotal;
      let estimatedTx = (tax/100) * beforeTax;
      let totalOrder = beforeTax + estimatedTx;

      document.querySelector(".js-total-amount1").innerHTML = `N${(sumTotal).toLocaleString()}`;

      document.querySelector(".js-shipping").innerHTML = `N${(shipping).toLocaleString()}`;

      document.querySelector(".js-before-tax").innerHTML = `N${(beforeTax).toLocaleString()}`;

      document.querySelector(".js-estimated-tax").innerHTML = `Estimated Tax ( ${tax}% ) :`;

      document.querySelector(".js-estimated-tax-amount").innerHTML = `N${(estimatedTx).toLocaleString()}`;

      document.querySelector(".js-order-amount").innerHTML = `N${(totalOrder).toLocaleString()}`;
     });
