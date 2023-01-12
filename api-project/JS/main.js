import "../Style/style.css";
import "../JS/pokemon.js";
import "../JS/items.js";
import "../JS/region.js";

import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  maininfo: document.querySelector(".main-info"),
  display: document.querySelector(".display"),
  home: document.querySelector(".home-btn"),
  pokemon: document.querySelector(".poke-btn"),
  item: document.querySelector(".item-btn"),
  region: document.querySelector(".region-btn"),
};

DOMSelectors.home.addEventListener("click", function () {
  home();
  homeintro();
});

DOMSelectors.pokemon.addEventListener("click", function () {
  poke();
  pokeintro();
});

DOMSelectors.item.addEventListener("click", function () {
  item();
  shopintro();
});

DOMSelectors.region.addEventListener("click", function () {
  region();
  regionintro();
});

/* FUCNTION LIBRARY */

function home() {
  document.body.classList.add("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("shop");
  document.body.classList.remove("region");
}

function homeintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the home </h3>
      <p>IDK why i added this, this is very usless</p>
    </div>`
  );
}

function poke() {
  document.body.classList.add("poke");
  document.body.classList.remove("home");
  document.body.classList.remove("shop");
  document.body.classList.remove("region");
}

function pokeintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the PC </h3>
      <p>There are about 905 pokemon present -> you can search them up</p>
    </div>`
  );
}

function item() {
  document.body.classList.add("shop");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("region");
}

function shopintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the SHOP </h3>
      <p>There are about 200+ items present -> you can search them up</p>
    </div>`
  );
}

function region() {
  document.body.classList.add("region");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("shop");
}

function regionintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the MAP </h3>
      <p>There are about 20 locations present -> you can search them up</p>
    </div>`
  );
}

// function pokemon() {
//   DOMSelectors.display.innerHTML = "";
//   songlist.forEach((data) => {
//     DOMSelectors.display.insertAdjacentHTML(
//       "beforeend",

//       `<div data-aos="fade-down" class="display-card">
//             <img class="display-img" src="${data.image}" />
//             <h3 class="display-title">${data.name}</h3>
//             <h4 class="display-release">${data.id}</h4>
//             <a href=${data.type} target ="blank">
//         </div>`
//     );
//   });
// }
