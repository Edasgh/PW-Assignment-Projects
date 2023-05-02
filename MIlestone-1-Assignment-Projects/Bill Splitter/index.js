function billSplitter(costOfEachDish,numOfPeople){
    // taking input of the cost of each dish and number of people in a table
let billToBePaidByEachPerson=costOfEachDish;
let totalBill=costOfEachDish*numOfPeople;

let payment={
    "Total bill for this table is ": totalBill,
    "Bill to be paid by each person is ": billToBePaidByEachPerson
}


console.log(payment)
return payment; // returning payment object
}

let costOfEachDish=200;
let numOfPeople=5;

billSplitter(costOfEachDish,numOfPeople);