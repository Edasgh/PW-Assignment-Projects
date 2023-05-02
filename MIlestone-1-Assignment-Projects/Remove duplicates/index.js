// suppose this is the array of products in cart with duplicates
let products=["pr1","pr2","pr3","pr4","pr3","pr2","pr2","pr5","pr5","pr3","pr1","pr6"]

// function of removing duplicates
function removeDuplicates(arr){
    // initialize a new array
    let unique_products=[]
    // looping through each item and add an item to the array if the item doesn't already exist in the array
    arr.forEach(item=>{
    if(!unique_products.includes(item)){
      unique_products.push(item)
    }
    })
    return unique_products // returning the new array
}

let unique_products_array=removeDuplicates(products); // storing the array into a variable for later use
console.log(unique_products_array)
