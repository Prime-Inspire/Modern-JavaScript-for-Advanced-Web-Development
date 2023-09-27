let computers = ["Desk", "Laptop", "Tablet PC"];
// console.log(computers.join(" | "));

// computers.push("Smart Phone", 5);
// computers.unshift("Smart Phone", 5);
// computers.shift();
// computers.pop();

// computers.forEach(function(item) {
//     item = `<li>${item}</li>`;
//     console.log(item);
// });

let longList = computers.find(function(item) {
    if(item.length >= 5) {
        return item;
    }
});
console.log("Long List: ", longList);

console.log(computers);