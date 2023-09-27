// Function Declaration
function doAddition (a, b) {
    let c = a + b;
    return c;
}

// Function Expression
const doMultiplication = function (a, b) {
    let c = a * b;
    return c;
}

console.log("Data from Function declaration: ", doAddition(25, 35));
console.log("Data from Function Expression: ", doMultiplication(5, 5));

// Immediatly invoked function
(function() {
    let a = 5;
    let b = 6;
    let c = doAddition(a, b);
    console.log(`The sum of a and b is: ${c}`);
})();