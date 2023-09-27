import Computer from "./Computer.js";

const laptop = new Computer(
    "Lenovo",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "HD Monitor",
    150,
    1000
)

console.log("The Lenovo Laptop: ", laptop);
console.log("The OS it comes with: ", laptop.os);