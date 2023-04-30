const prompt=require("prompt-sync")({sigint:true});
//by using prompt
let celcius1=prompt("Enter the temperature in Celcius :")
//using a variable 
let celcius2=340;

function convertToFarenheit(temp) {
    let farenheit=(temp*1.8)+32;
    console.log(farenheit)
    return farenheit;
    //return farenheit to store the value in a variable for later use
    
}

convertToFarenheit(celcius1)
convertToFarenheit(celcius2)