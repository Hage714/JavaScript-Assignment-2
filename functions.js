//A function is a piece of code that can be reused without having to write it again and again.
function add(a, b) {
    return a + b;
}
console.log(add(1,2))

//A function to calculate cube
function cube(n){    
    return n*n*n; 
    }
    console.log(cube(3))

    //A function to add numbers
    function add(a, b) {
        var sum = a + b;
        return sum;
    }
    var sum = add(5,10)
    console.log(`The sum is ${sum}`)

    var sum1 = add(12,1)
    console.log(`The sum is ${sum1}`)

    //A function to greet a user
    function greet_user(user_name) {
        console.log(`Hello ${user_name}!`);
    }
    greet_user("John");

    //A function to display hello world on console
    function hello_world() {
        console.log("Hello World!");
    }
    hello_world();

    //A function to calculate tax
    function calculate_tax(income) {
        var tax = income * 0.1;
        return tax;
    }
    var tax = calculate_tax(10000);
    console.log(`Tax is ${tax}`)

    //A function to calculate sum
    function find_sum(a,b=5){
        return a + b;
    }
    console.log(`Find sum is ${find_sum(20)}`)
    