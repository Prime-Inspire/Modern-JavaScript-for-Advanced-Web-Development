const x = "red";
x = "light blue";

function change_to_blue() {
    let inside_x = "blue";
    console.log("Inside function data: " + inside_x);
}
change_to_blue();

console.log(x);