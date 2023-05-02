
//self invoking arrow function which generates a random number
(()=>{
    let random=Math.random()*100
        let roundedNumber=Math.floor(random);
        console.log(roundedNumber)
})()

