// the person object

const person={
    first_name:"Mithun",
    last_name:"S",
    ageInYears:20
}

// the logResults function
const logResults=(fullName,ageInDays)=>{
    
    const resultString= `The person's fullname is ${fullName} and his/her age in days is ${ageInDays}.`
     
    // returning a callbackFunction to log the result to the console
    return(
        
    function logMesage(){
        console.log(resultString)
    } ,

    resultString
    )

}

//the ageInDays function 

const ageInDays=(InputObj , callBackFn)=>{
    const fullName=`${InputObj.first_name} ${InputObj.last_name}`;
    const ageInDays= (InputObj.ageInYears)*365
   
    console.log(callBackFn(fullName,ageInDays))
}


ageInDays(person,logResults) //The person's fullname is Mithun S and their age in days is 7300.