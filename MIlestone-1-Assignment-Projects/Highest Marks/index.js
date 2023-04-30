const prompt=require("prompt-sync")({sigint:true});

let student1Marks=prompt("Marks obtained by student1 :")
let student2Marks=prompt("Marks obtained by student2 :")
let student3Marks=prompt("Marks obtained by student3 :")
let student4Marks=prompt("Marks obtained by student4 :")
let student5Marks=prompt("Marks obtained by student5 :")

let marksArray=[student1Marks,student2Marks,student3Marks,student4Marks,student5Marks]

let student1=prompt("Enter student1 's name :")
let student2=prompt("Enter student2 's name :")
let student3=prompt("Enter student3 's name :")
let student4=prompt("Enter student4 's name :")
let student5=prompt("Enter student5 's name :")

let studentsArray=[student1,student2,student3,student4,student5]

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
   
    
    return max;
}



let maxValue=largest(marksArray);

let student="";

if(maxValue==marksArray[0]){
    student=studentsArray[0]
}else if(maxValue==marksArray[1]){
    student=studentsArray[1]
}else if(maxValue==marksArray[2]){
    student=studentsArray[2]
}else if(maxValue==marksArray[3]){
    student=studentsArray[3]
}else if(maxValue==marksArray[4]){
    student=studentsArray[4]
}

console.log("Highest marks of the class is "+maxValue+" and the highest marks are obtained by "+student)


