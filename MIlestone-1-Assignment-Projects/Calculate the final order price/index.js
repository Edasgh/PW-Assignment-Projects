let products = [
  {
    Unit_Price: 20,
    Quantity: 4,
  },
  {
    Unit_Price: 30,
    Quantity: 2,
  },
  {
    Unit_Price: 40,
    Quantity: 4,
  },
  {
    Unit_Price: 50,
    Quantity: 4,
  },
  {
    Unit_Price: 60,
    Quantity: 10,
  },
  {
    Unit_Price: 70,
    Quantity: 8,
  },
];

// let price=products[0].Unit_Price*products[0].Quantity;
// console.log(price)
function calculateTotalPrice(array) {
    let priceArray=[]
    let total=0
  for (let i = 0; i < array.length; i++) {
    let price=array[i].Unit_Price*array[i].Quantity;
    priceArray.push(price);
   
  }
  for(let j in priceArray){
   total+=priceArray[j]
  }
// console.log(priceArray)
console.log("Total price to pay is : "+total)



}

calculateTotalPrice(products)