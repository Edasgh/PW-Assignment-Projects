// Student class
class Student{
    constructor(name){
    this.name=name
    }
   
}

//  Object properties
Object.prototype.printDetails=function(){
    console.log(`Hello, the student is ${this.name}`)
}

// creating a new student object
const student=new Student("Mithun");
console.log(student.printDetails()); // Hello, the student is Mithun
