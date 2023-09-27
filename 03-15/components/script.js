import computerObjectArray from "./data.js";

const content = computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");

    computerArticle.setAttribute("id", computer.id);

    let heading = "<h1>" + computer.name + "</h1>";
    computerArticle.innerHTML = heading;

    return computerArticle;
} );

const main = document.getElementById("content_row");

content.forEach( (computer) => {
    main.append(computer);
} );