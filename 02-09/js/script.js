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
    1000,
    "Wed Aug 25 2018 13:28:56 GMT+0530 (India Standard Time)"
)

console.log("The Lenovo Laptop: ", laptop);
console.log("The OS it comes with: ", laptop.os);
console.log("Date Laptop was bought: ", laptop.dateAquired);
console.log("Days since laptop bought: ", laptop.computerAge());