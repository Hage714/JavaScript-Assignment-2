var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// For in loop
var sum = 0;
for (var i in numbers) {
    sum += numbers[i]
}
console.log("The sum is: ", sum);

// For of
var total_value = 0;
for (var value of numbers) {
    total_value += value
}
console.log("The total value is: ", total_value)



//Use for loop to find the sum of the values in the array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("The sum is : ", sum);