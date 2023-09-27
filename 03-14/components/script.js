import computerObjectArray from "./data.js";

const content = computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");

    computerArticle.setAttribute("id", computer.id);

    computerArticle.innerHTML = `
        <article class="card">
            <img src=${computer.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${computer.name}</h5>
            <p class="card-text">Features</p>
            <ul>
                <li><strong>Screen: </strong>${computer.screen}</li>
                <li><strong>Memory: </strong>${computer.ram}</li>
                <li><strong>Storage: </strong>${computer.storage}</li>
                <li><strong>Wi-Fi: </strong>${computer.wifi}</li>
                <li><strong>OS: </strong>${computer.os}</li>
                <li><strong>CPU: </strong>${computer.cpu}</li>
            </ul>
            </div>
        </article>
    `;

    return computerArticle;
} );

const main = document.getElementById("content_row");

content.forEach( (computer) => {
    main.append(computer);
} );