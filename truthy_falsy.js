
//There are only six falsy values in JavaScript:
//undefined, null, NaN(Not A Number), 0, ""(empty string), and false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));

console.log(true & true) // true
console.log(true | false) // true 
console.log(true & false) // false
console.log(false & false) // false
console.log(false | false) // false

var a = 10;
var b = 3;

console.log(a > b & a >= b)
console.log(a > b | b > a)
console.log(a > b & b > a)