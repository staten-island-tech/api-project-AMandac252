import "../Style/style.css";
import "../JS/pokemon.js";
import "../JS/shop.js";
import "../JS/region.js";

const DOMSelectors = {
  maininfo: document.querySelector(".main-info"),
  display: document.querySelector(".display"),
  search: document.querySelectorAll(".search"),
  home: document.querySelector("fas fa-home"),
  pokemon: document.querySelector("fas fa-laptop"),
  store: document.querySelector("fas fa-shopping-cart"),
  region: document.querySelector("fas fa-map"),
  buttons: document.querySelectorAll(".buttons"),
};

function changeLi() {
  DOMSelectors.buttons.forEach((buttons) => {
    buttons.addEventListener("click", function () {
      console.log("works");
      home();
      poke();
      shop();
      region();
    });
  });
}
changeLi();
/* 
DOMSelectors.pokemon.addEventListener("click", function () {
  pokemon();
  console.log("pokemon");
}); */

// /* FUCNTION LIBRARY */

function home() {
  document.body.classList.add("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("shop");
  document.body.classList.remove("region");
}

function poke() {
  document.body.classList.add("poke");
  document.body.classList.remove("home");
  document.body.classList.remove("shop");
  document.body.classList.remove("region");
}

function shop() {
  document.body.classList.add("shop");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("region");
}

function region() {
  document.body.classList.add("shop");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("region");
}

function pokemon() {
  DOMSelectors.display.innerHTML = "";
  songlist.forEach((data) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-down" class="display-card">
            <img class="display-img" src="${data.image}" />
            <h3 class="display-title">${data.name}</h3>
            <h4 class="display-release">${data.id}</h4>
            <a href=${data.type} target ="blank">
        </div>`
    );
  });
}
