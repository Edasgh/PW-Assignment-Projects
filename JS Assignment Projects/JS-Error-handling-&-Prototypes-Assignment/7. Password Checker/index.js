//User class

const uppercaseArr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
       
    }

    getPassword(){
        // get the password where every character is replaced by "*"
     return this.password.replace(/./g,"*")

    }

    setPassword(password){
        // validate the password before setting
        this.password=password
        if(password.length<8 ||([1,2,3,4,5,6,7,8,9,0]).includes(password)||([...uppercaseArr]).includes(password)||(password.length<8 ||([1,2,3,4,5,6,7,8,9,0]).includes(password)||([...uppercaseArr]).includes(password))){
            return "Password must be at least 8 characters long and contain atleast one number and one uppercase letter"
        }else{
            return password
        }
    }
}

// new User object
const person=new User("12erd","ertdda123456");
console.log(person.getPassword()); // ************
console.log(person.setPassword("Emrtdda12")) // Emrtdda12
console.log(person.getPassword()); // *********
