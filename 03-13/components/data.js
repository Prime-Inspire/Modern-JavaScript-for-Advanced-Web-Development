import Computer from "./Computer.js";

const desktop = new Computer(
    "config01",
    "Custom Build",
    "UHD Monitor",
    64,
    1000,
    true,
    "Windows 11",
    "Intel",
    "img/laptop.jpg"
);

const laptop = new Computer(
    "config02",
    "Dell",
    "HD Monitor",
    32,
    512,
    true,
    "Windows 10",
    "AMD",
    "img/laptop.jpg"
);

const computerObjectArray = [desktop, laptop];

export default computerObjectArray;