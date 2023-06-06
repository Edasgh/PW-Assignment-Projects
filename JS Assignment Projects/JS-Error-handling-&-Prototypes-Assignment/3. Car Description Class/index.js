
// creating a class for car object
class Car{
    constructor(year,model,company){
        this.year=year;
        this.model=model;
        this.company=company;
    }
   // method to return the result
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}.`
    }
}

// creating a new car object 
const myCar=new Car(2022,"Rapid","Skoda");
//getting the details of the car
const myCarDetails=myCar.getDescription();
console.log(myCarDetails); //This is a 2022 Skoda Rapid.