// the array of products
let products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

const filterbyCategory = (arr) => {
  return function filterProducts(category) {
    return arr.filter((e) => (e.category === category));
  };
};

let clothingProducts=filterbyCategory(products)("Clothing")
console.log(clothingProducts);

// output :
/*[
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' }
  ]
*/