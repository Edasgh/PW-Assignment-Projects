let productsInCart = [
  // array of products
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

//arrow function to calculate the total price
const calculateTotalPrice=(array) =>{
  // initially the array of prices is empty and totalPrice is 0
    let priceArray=[]
    let total=0
    // looping through each product in  the productsInCart-array
  for (let i = 0; i < array.length; i++) {
    //price of each product
    let price=array[i].Unit_Price*array[i].Quantity;
    // create an array of all products' prices
    priceArray.push(price);
   
  }
  for(let j in priceArray){
    // sum of all the prices (each element of priceArray)
   total+=priceArray[j]
  }

let priceToPay="Total price to pay is : "+total
console.log(priceToPay);
// returning the total price
return priceToPay;




}

calculateTotalPrice(productsInCart) //passing all the products in customers cart