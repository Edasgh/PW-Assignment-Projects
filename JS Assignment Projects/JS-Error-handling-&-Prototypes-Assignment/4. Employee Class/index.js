
// creating a Employee class for an employee object
class Employee{
    constructor(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
    }

    getSalary(){
        return this.salary
    }
}


const employee = new Employee("Mithun","Junior Web Developer",80000);
const employeeSalary=employee.getSalary();
console.log(employeeSalary) // 80000
