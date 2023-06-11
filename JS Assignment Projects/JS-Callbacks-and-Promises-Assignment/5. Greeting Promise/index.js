// the userName to give as an input
const userName="Eshita"

// the function to greet the user by calling his/her name
const greetUser=(Name)=>{
   // returning a promise which will resolve by printing `Hello, Name`
   return new Promise((resolve, reject) => {
        resolve(
            console.log(`Hello, ${Name}!`)
        )
    })
}

// calling the function for userName string
greetUser(userName); // OUTPUT : Hello, Eshita!
// calling the function for the string "Mithun"
greetUser("Mithun");  // OUTPUT : Hello, Mithun!