//switch statement to check for grades

function checkGrade(grade) {   //function definition

switch (grade) {
    case "A":
        console.log("Distinction");
        break;
    case "B":
        console.log("Average");
        break;
    case "C":
        console.log("Pass");
        break;
    default:
        console.log("Fail");
        break;
}
}

checkGrade("A");   //calling the function
