
function handleCost (id,price){
    const Cost = document.getElementById(id);
    const newCost = price;
    let productCosts = parseInt(newCost);
    Cost.innerHTML = productCosts;
    handleCalculation();
}


 function handleCalculation(){
    const memoryCostAmount = getInputValue('memory-cost')
    const storageCostAmount = getInputValue('storage-cost');
    const delivaryCostAmount = getInputValue('delivary-cost');
    const currentPriceAmount = getInputValue('current-price');

  
   
   const total = memoryCostAmount + storageCostAmount + delivaryCostAmount + currentPriceAmount;
    document.getElementById('total-cost').innerHTML = total;
   document.getElementById('footer-price').innerHTML = total;
 }

 function getInputValue(id){
 const Cost = document.getElementById(id).innerHTML;
   const CostAmount = parseInt(Cost);
   return CostAmount;
 }

 function handleDiscount(){
     const inputValue = document.getElementById('discount').value;
    if(inputValue.includes('abc')){
      const discount = document.getElementById('footer-price').innerText;
      
      const discountAmount = parseInt(discount * 0.2);
      console.log(discountAmount)
      const newDiscountAmount = discount - discountAmount;
      document.getElementById('footer-price').innerHTML = newDiscountAmount;
      document.getElementById('discount').value = '';
    }
    else {
      alert('Coupon Code Is Incorrect')
      document.getElementById('discount').value = '';
    }
 }







