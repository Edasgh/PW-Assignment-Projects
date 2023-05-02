// getting all the required html elements
const nameInput=document.getElementById("name");
const form=document.getElementById("nameForm");
const p = document.querySelector("p")
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

form.addEventListener("submit",(e)=>{
    //preventing the default behaviour (reloading of webpage) after submission
    e.preventDefault();
    // getting the value of name-input field
    let name=nameInput.value;
    // getting the first character of the user's name
    let firstCharacter=name[0];
    // Capitalizing the first character of user's name if not
   let modifiedFirstCharacter=firstCharacter.toUpperCase();
   // Returning the name as it is if the user's name's first character is capitalized
   // Otherwise returning the user's name with first character modified + other characters as the full name 
    let modifiedName=upperCaseLetters.includes(firstCharacter) ? name : modifiedFirstCharacter+name.slice(1) ;
   // printing the modified name in the paragraph
    p.innerText=`Modified name is : ${modifiedName}`
    console.log(modifiedName)
    return modifiedName;
    
})