function billSplitter(costOfEachDish,numOfPeople){
let billToBePaidByEachPerson=costOfEachDish/numOfPeople;
let totalBill=costOfEachDish;

let payment={
    "Total bill for this dish is ": totalBill,
    "Bill to be paid by each person is ": billToBePaidByEachPerson
}

// console.log("Bill to be paid by each person is :"+billToBePaidByEachPerson);
// console.log("Total bill is :"+totalBill);
console.log(payment)
}

let costOfEachDish=200;
let numOfPeople=5;

billSplitter(costOfEachDish,numOfPeople);