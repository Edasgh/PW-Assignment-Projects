// the input object
const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8 , Block B, Industrial area",
    city: "Sector 62, Noida",
    state: "UttarPradesh",
  },
};

// function to return only name and street
function returnNameAndStrret(InputObj) {
    //  destructuring the input object
  const { name,address:{street}} = InputObj;
  const outputObj = { name, street };
  // returning the output
  return outputObj
}

// storing the output for person object in a variable
let nameAndstreet=returnNameAndStrret(person);
console.log(nameAndstreet); // { name: 'Mithun', street: 'B8 , Block B, Industrial area' }
