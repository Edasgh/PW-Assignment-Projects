let str1 = "123"
let str2 = "abc"

// function to convert a string to  number if applicable

const convertToNumber = (string) => {
    try{
    const output = parseFloat(string)
    if(isNaN(output)){
      throw new Error("Invalid Number")
    }else{
      return output

    }
  }catch(error){
    return error
  }
  
}

// calling the function and storing the results into a variable
let result1=convertToNumber(str1)
console.log(result1)// 123

let result2=convertToNumber(str2)
console.log(result2) // Invalid Number
