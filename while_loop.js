//while loop to find the sum of the elements in the array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
var i = 0;
while ( i < arr.length) {
    sum = sum + arr[i]
    i+= 1;
}
console.log(sum);



//To find sum
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
var i = 0;

while (i < numbers.length) {
    sum = sum + numbers[i]
    i = i + 1;
}
console.log(`The sum is: ${sum}`)