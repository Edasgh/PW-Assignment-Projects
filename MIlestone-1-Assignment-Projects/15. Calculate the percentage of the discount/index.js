let price=4000; // original price
let priceAfterDiscount=3000; //price after discount
// arrow function to calculate discount
const calculateDiscount=(price,priceAfterDiscount)=>{
// calculating the percentage of discount
let discount=(priceAfterDiscount*100)/price
console.log("Discount on this product is "+discount.toFixed()+" %")
//toFixed() method rounds a number to 2 decimal places
return discount;
}

calculateDiscount(price,priceAfterDiscount); // passing the original price and the price after discount