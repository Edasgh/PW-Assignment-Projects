// list of USD prices of products
let productsPrices = {
  price1InUSD:100,
  price2InUSD:200,
  price3InUSD:300,
  price4InUSD:400,
  price5InUSD:500,
  price6InUSD:600
};
// creating an array with all the values(prices in USD)
let pricesInUSD=Object.values(productsPrices);
//function to convert USD to INR
function convertToINR(pricesInUSD_Array){
    // creating an array of all INR prices
    const pricesInINRArray=pricesInUSD_Array.map(price => price * 80);
    // initialize an object of price${index}:priceValue key-value pair
    let pricesInINRObject={}
    // for each element of INR prices array add a key and the element as a value
    pricesInINRArray.forEach((element , index)=>{
    pricesInINRObject[`price${index+1}InINR`]=element
    })  
//returning the modified object
    return pricesInINRObject;
}

let modifiedPrices=convertToINR(pricesInUSD) // passing pricesInUSD Array to convertToINR Function
console.log(modifiedPrices) // printing the modified object