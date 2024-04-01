//Executes the loops body at least once

//A do while loop that finds the sum of the elements of the array
var arr = [10, 22, 13, 48, 51, 10];
var sum = 0;

do {
    sum += arr.shift();
} while (arr.length > 0);
console.log(sum);



//to find the sum of the elements of the array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

var sum = 0;
var i = 0;
do {
    sum += numbers[i];
    i += 1;
} while ( i < numbers.length )

console.log( 'The loop was executed ' + i + ' times' );
console.log(sum);