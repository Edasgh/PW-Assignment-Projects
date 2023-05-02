// acessing all the cart items (suppose this is the array of the halves of the quantities)
let cartItems_Quantities = [1, 2, 5, 7, 10, 12, 15, 20];

// the bug fix
function getRightQuantities(array) {
  let rightQuantities = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[index] * 2;
    index++;
    rightQuantities.push(element);
  }
  console.log(rightQuantities);
  return rightQuantities;
}

//passing the array to the function
getRightQuantities(cartItems_Quantities);
