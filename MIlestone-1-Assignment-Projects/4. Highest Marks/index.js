// declaring the prompt method
const prompt=require("prompt-sync")({sigint:true});
// taking input of students' marks from the user
let student1Marks=prompt("Marks obtained by student1 :")
let student2Marks=prompt("Marks obtained by student2 :")
let student3Marks=prompt("Marks obtained by student3 :")
let student4Marks=prompt("Marks obtained by student4 :")
let student5Marks=prompt("Marks obtained by student5 :")
// creating an array of students' marks
let marks=[student1Marks,student2Marks,student3Marks,student4Marks,student5Marks]
// taking input of students' names from the user
let student1=prompt("Enter student1 's name :")
let student2=prompt("Enter student2 's name :")
let student3=prompt("Enter student3 's name :")
let student4=prompt("Enter student4 's name :")
let student5=prompt("Enter student5 's name :")
// creating an array of students' names
let names=[student1,student2,student3,student4,student5]
// function to find out highest marks 
function largest(arr) {
    let i;
   
    // Initialize maximum element
    let max = arr[0];

    // Traverse array elements 
    // from second and compare
    // every element with current max 
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
   
    
    return max; // returning the maximum value
}



let maxValue=largest(marks);

let student="";
// using if-else statement to find out student's name 
if(maxValue==marks[0]){
    student=studentsArray[0]
}else if(maxValue==marks[1]){
    student=names[1]
}else if(maxValue==marks[2]){
    student=names[2]
}else if(maxValue==marks[3]){
    student=names[3]
}else if(maxValue==marks[4]){
    student=names[4]
}
 
    


console.log("Highest marks of the class is "+maxValue+" and the highest marks are obtained by "+student)


