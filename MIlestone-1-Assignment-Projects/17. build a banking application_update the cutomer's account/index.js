//user object
let user={
    name:"Eshita Das",
    balance:100
}
//deposit money function
function depositMoney(amount){
let depositAmount=parseFloat(amount);
user.balance+=depositAmount
console.log(user.balance)
return user.balance
}
// withdraw money function
function withdrawMoney(amount){
    let withdrawAmount=parseFloat(amount);
    user.balance-=withdrawAmount
    console.log(user.balance) 
    return user.balance   
}
depositMoney(10) // deposit 10 rupees
withdrawMoney(10) // withdraw 10 rupees
// balance : 100

console.log(user);