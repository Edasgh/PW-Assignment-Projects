
// function to get a person's name and age from an object
const getPerson=(InputObj)=>{
    try {
        const Name=InputObj.name;
        const Age = InputObj.age;
        const details="Name : "+Name+",  Age : "+Age

        if(!Name || !Age || !(Name&&Age)){
            throw new Error("Invalid Parameter Type")
        }else{
            return details
        }

    } catch (error) {
        return error
    }
}

// Calling the function and storing the results in the variables for various objects

const result1=getPerson({name:"Mithun",age:20})
console.log(result1); // Name : Mithun , Age : 20

const result2=getPerson({name:"Mithun"})
console.log(result2) // Invalid Parameter Type


const result3=getPerson({age:20})
console.log(result3) // Invalid Parameter Type


const result4=getPerson(["Mithun",20])
console.log(result4) // Invalid Parameter Type
