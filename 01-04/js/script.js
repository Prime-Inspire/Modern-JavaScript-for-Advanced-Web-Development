let x = "red";

console.log(x);

function change_to_blue() {
    let inside_x = "blue";
    console.log("Inside function data: " + inside_x);
}
change_to_blue();

console.log("Inside function data: " + inside_x);

console.log(x);