// Types of Computers
const computers = ["Desktop", "Laptop", "Tablet", "Smart Phone"];

const objectList = {
    item01: {
        type: "Desktop"
    },
    item02: {
        type: "Laptop"
    },
    item03: {
        type: "Tablet"
    },
    item04: {
        type: "Smart Phone"
    },
}

// Create Elements
const mainTag = document.querySelector("main");
let unorderedList = document.createElement("ul");

// "For" Loop
// for( let i = 0; i < computers.length; i++ ) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = computers[i];
//     unorderedList.append(listItem);
// }

// "For Of" Loop
// for (const item of computers) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item;
//     unorderedList.append(listItem);
// }

// "For Each" Loop
// computers.forEach((item) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item;
//     unorderedList.append(listItem);
// });

// For in Loop for objects
for (const singleObject in objectList) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${objectList[singleObject].type}`;
    unorderedList.append(listItem);
}

// Append List
mainTag.append(unorderedList);