const prompt=require("prompt-sync")({sigint:true});

let color1=prompt("Enter the first color :");
let color2=prompt("Enter the second color :");

if(color1=="red"&& color2=="blue" || color2=="red"&&color1=="blue"){
    console.log("purple")
}else if(color1=="red"&&color2=="yellow"||color1=="yellow"&&color2=="red"){
    console.log("orange")
}else if(color1=="blue"&&color2=="yellow"||color1=="yellow"&&color2=="blue"){
    console.log("green")
}else{
    console.log("Invalid color combination")
}