//If statement to check if the argument that is being passed to the function is a number
function checkifNumber(n) {
    if (typeof n === "number") {
        console.log(n + " is a number");
}
}
checkifNumber(10);
checkifNumber("2") //does not do anything since 2 was passed as a string
checkifNumber() //does not do anything since no argument was passed


//If else statement to check grades
var grade = 75;

    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else if (grade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }


    //If statement to check school code

    function checkschCode(code) {     //defining the function
    if (code == 001) {
        console.log("Genesis Academy");
    }
     else if (code = 002) {
        console.log("Al Falah School");
    }
     else if (code = 003) {
        console.log("Kinderworld School");
    }
     else {
        console.log("School is unknown");
    }
}
checkschCode(001)  //calling the function







