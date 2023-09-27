import computerObjectArray from "./data.js";

// const navBar = `
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Products</a></li>
//     <li><a href="#">Contact</a></li>
//     <li><a href="#">Blog</a></li>
// `;

// const mainNav = document.createElement("nav");
// mainNav.classList.add("main-menu");

// const navList = document.createElement("ul");
// navList.innerHTML = navBar;
// mainNav.append(navList);

// document.querySelector(".container").prepend(mainNav);

const content = computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");

    computerArticle.setAttribute("id", computer.id);

    computerArticle.innerHTML = `
        <article class="card">
            <img src=${computer.image} alt="" class="card-img-top" width="100%" height="auto">
            <div class="card-body">
            <h5 class="card-title">${computer.name}</h5>
            <p class="card-text">Features</p>
            <ul>
                <li class="feature feature_screen"><strong>Screen: </strong>${computer.screen}</li>
                <li class="feature feature_ram"><strong>Memory: </strong>${computer.ram}</li>
                <li class="feature feature_storage"><strong>Storage: </strong>${computer.storage}</li>
                <li class="feature feature_wifi"><strong>Wi-Fi: </strong><span class="wifi_toggle">${computer.wifi ? "Available" : "Not Available"}</span></li>
                <li class="feature feature_os"><strong>OS: </strong>${computer.os}</li>
                <li class="feature feature_cpu"><strong>CPU: </strong>${computer.cpu}</li>
            </ul>
            <button class="wifi-button">Toggle Wi-Fi</button>
        </article>
    `;

    const button = computerArticle.querySelector(".wifi-button");
    const status = computerArticle.querySelector(".wifi_toggle");

    button.addEventListener("click", (event) => {
        console.log(event);
        status.innerText === "Available" ? status.innerText = "Not Available" : status.innerText = "Available";
    });

    return computerArticle;
} );

const main = document.getElementById("content_row");

content.forEach( (computer) => {
    main.append(computer);
} );