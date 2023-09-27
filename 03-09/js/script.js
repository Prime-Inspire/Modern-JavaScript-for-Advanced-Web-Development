import Computer from "./Computer.js";

const laptop = new Computer(
    "Lenovo",
    "AMD",
    16,
    1000,
    "Windows 11",
    true,
    "HD Monitor",
    null,
    null,
    "img/laptop.jpg"
)

const content = `
    <figure class="computer_image">
        <img src=${laptop.image} loading="lazy" width="250px" height="auto">
    </figure>
    <h1 class="computer_name">${laptop.name}</h1>
    <ul class="computer_features">
        <li class="feature processor">Processor: ${laptop.processor}</li>
        <li class="feature ram">RAM: ${laptop.ram}GB</li>
        <li class="feature storage">Storage: ${laptop.storage}GB</li>
        <li class="feature os">OS: ${laptop.os}</li>
        <li class="feature wifi">Wi-Fi: ${laptop.wifi ? "wifi is availble" : "wifi is not available"}</li>
        <li class="feature monitor">Monitor: ${laptop.monitor}</li>
        <li class="feature wifiBand2g">2g Wi-Fi: ${laptop.wifiSpeed.lowSpeed}Mbps</li>
        <li class="feature wifiBand5g">5g Wi-Fi: ${laptop.wifiSpeed.highSpeed}Mbps</li>
    </ul>
`;

const main = document.querySelector("main");

const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id", "laptop");
newArticle.innerHTML = content;

main.append(newArticle);

console.log(content);

if (laptop.wifi) {
    console.log("Wifi is Available");
}else {
    console.log("Wifi is not available");
}

if (laptop.ram >= 16) {
    console.log("The Laptop has great performance.");
} else {
    console.log("The Laptop has minimal performance");
}

if (laptop.storage <= 512) {
    console.log("The Laptop has low storage.");
} else {
    console.log("The Laptop has high storage");
}

if (laptop.storage != 1000) {
    console.log("Laptop does not have 1TB storage");
} else {
    console.log("Laptop has 1TB storage");
}

if ( laptop.wifiSpeed.lowSpeed && laptop.wifiSpeed.highSpeed ) {
    console.log("Laptop has Dual Bands Wi-Fi.");
} else {
    console.log("Laptop does not have Dual Bands Wi-Fi.");
}

if ( laptop.wifiSpeed.lowSpeed || laptop.wifiSpeed.highSpeed ) {
    console.log("Laptop does have Wi-Fi.");
} else {
    console.log("Laptop does not have Wi-Fi.");
}

if ( laptop.wifiSpeed.lowSpeed === 150 || laptop.wifiSpeed.highSpeed === 1000) {
    console.log("Laptop does have Wi-Fi.");
} else {
    console.log("Laptop does not have Wi-Fi.");
}
