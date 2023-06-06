//User class

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const uppercaseArr = [...uppercaseLetters];
const nums = "1234567890";
const numsArr = [...nums];
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    // get the password where every character is replaced by "*"
    return this.password.replace(/./g, "*");
  }


  setPassword(password) {
    // validate the password before setting
    this.password = password;
   
    let numsOccurence=0
     for (let i = 0; i < password.length; i++) {
       if(numsArr.includes(password.charAt(i))){
        numsOccurence++
       }
       
     }
    let uppsOccurence=0
     for (let i = 0; i < password.length; i++) {
       if(uppercaseArr.includes(password.charAt(i))){
        uppsOccurence++
       }
       
     }


     if(password.length<8 || numsOccurence<=0 || uppsOccurence<=0 || (password.length<8 && numsOccurence<=0 && uppsOccurence<=0)){
      return "Password should be atleast 8 characters long and should contain atleast one number and one uppercase letter"
     }else{
      return password
     }
  
     
    
  }
}

// new User object
const person = new User("12erd", "Ertdda123456");
console.log(person.getPassword()); // ************
console.log(person.setPassword("Emrtdda12")); // Emrtdda12
console.log(person.setPassword("mrtdaERT")); //Password should be atleast 8 characters long and should contain atleast one number and one uppercase letter
console.log(person.setPassword("mrtdaERT123")); //mrtdaERT123
console.log(person.getPassword()); // *********



