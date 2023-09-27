import Computer from "./Computer.js";

const desktop = new Computer(
    "Custom Build",
    "Intel i9",
    32,
    1000,
    "Windows 11",
    false,
    "UHD Monitor",
    150,
    1000,
    "Thu Mar 24 2023 13:28:56 GMT+0530 (India Standard Time)"
);

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
);

console.log("Desktop PC: ", desktop);
console.log("Desktop was bought on: ", desktop.computerAge());

console.log("Lap PC: ", laptop);
console.log("Laptop was bought on: ", laptop.computerAge());