let price=4000;
let priceAfterDiscount=3000;
function calculateDiscount(price,priceAfterDiscount){
let discount=(priceAfterDiscount*100)/price
console.log("Discount on this product is "+discount.toFixed()+" %")
//toFixed() method rounds a number to 2 decimal places
return discount;
}

calculateDiscount(price,priceAfterDiscount);