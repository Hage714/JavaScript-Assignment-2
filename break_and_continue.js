var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum = 0;
// Continue
// The continue statement skips to the next iteration when the provided condition is met
for (var i in numbers) {
    if(i % 2 !== 0) continue;

    sum += numbers[i]
}

console.log(sum)


// Break
// The break statement terminates the execution of the loop
var total = 0;
for (var i in numbers) {
    total += numbers[i]

    if (total == 15) {
        break
    }
}

console.log(`The total value is: ${total}`)