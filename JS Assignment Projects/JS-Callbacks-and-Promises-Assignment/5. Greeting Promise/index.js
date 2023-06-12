// the userName to give as an input
const userName="Eshita"

//METHOD-1:
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


//METHOD-2:
// async function greet(name) {
function greet(name) {
    return new Promise((resolve,reject)=>{
        const greeting=`Hello, ${name}`
        resolve(greeting)
    // }).then(response=>console.log(response))
    })
    
}

greet(userName).then(response=>console.log(response))