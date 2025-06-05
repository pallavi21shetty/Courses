//  1. Write a code which can give grades to students according to theirs marks using Conditionals
// 80%-100%, Distinction
// 60%-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 0%-34%, FAIL

let marks = 89;
if (marks >= 80 && marks <= 100) {
    console.log ("Grade: Distinction");
} else if (marks >= 60 && marks < 80) {
    console.log("Grade: First Class");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade: Second Class");
} else if (marks >= 35 && marks < 50) {
    console.log("Grade: Pass");
} else if (marks >= 0 && marks < 35) {
    console.log("Grade: FAIL");
} else {
    console.log("Invalid marks! Please enter a number between 0 and 100.");
}

//2. Write logic to check if the user is 18 years or older than 18 years allow him to vote, else infrom him how many more years he needs to become a voter.
let age=4;
if(age < 0){
    console.log("invalid age");
}
else if(age>18){
    console.log("you can vote");
}
else{
    let x= 18 - age
    console.log("you have " + x +" year to vote");
    
}