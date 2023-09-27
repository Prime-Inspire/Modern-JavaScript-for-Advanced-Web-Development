// The Laptop Object
const lenovoLaptop = {
    name:       "Lenovo Gaming",
    color:      "Black",
    ram:        16,
    storage:    512,
};

const addlaptop = function (currentLaptop) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentLaptop.name}</h1>
        <p>Details are as below:</p>
        <ul>
            <li>Color: ${currentLaptop.color}</li>
            <li>RAM: ${currentLaptop.ram}GB</li>
            <li>Storage: ${currentLaptop.storage}GB</li>
        </ul>
    `;
    return newArticle;
};

const theArticle = addlaptop(lenovoLaptop);
console.log(theArticle);

const main = document.querySelector("main");
main.append(addlaptop(lenovoLaptop));