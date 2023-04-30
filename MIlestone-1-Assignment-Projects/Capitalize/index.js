const nameInput=document.getElementById("name");
const form=document.getElementById("nameForm");
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=nameInput.value;
    let firstCharacter=name[0];
   let modifiedFirstCharacter=firstCharacter.toUpperCase();
    let modifiedName=upperCaseLetters.includes(firstCharacter) ? name : modifiedFirstCharacter+name.slice(1) ;
    console.log(modifiedName)
    return modifiedName;
    
})