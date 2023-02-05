//function
function num() {
    document.write(100);
}
num();

//arrow function
let number = () => {
    return 10;
};
console.log(number());

//we can write it this way also
let num2 = () => console.log(5);
num2();

//function using parameters
let num3 = (a,b) => a + b;
console.log(num3(20,30));