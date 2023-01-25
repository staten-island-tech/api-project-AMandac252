import "../Style/style.css";
import { fetchpokemon } from "../JS/pokemon.js";
import { fetchitems } from "../JS/items.js";
import { fetchlocations } from "../JS/locations.js";

import AOS from "aos";
``;
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DOMSelectors = {
  maininfo: document.querySelector(".title-card"),
  display: document.querySelector(".display"),
  home: document.querySelector(".home-btn"),
  pokemon: document.querySelector(".poke-btn"),
  item: document.querySelector(".item-btn"),
  region: document.querySelector(".region-btn"),
  searchInput: document.getElementsByClassName(".search"),
  pokemonnames: document.querySelector("pokemon"),
};

DOMSelectors.home.addEventListener("click", function () {
  home();
  homeintro();
});

DOMSelectors.pokemon.addEventListener("click", function () {
  poke();
  pokeintro();
  search();
});

DOMSelectors.item.addEventListener("click", function () {
  item();
  shopintro();
  search();
});

DOMSelectors.region.addEventListener("click", function () {
  region();
  regionintro();
  search();
});

/* FUCNTION LIBRARY */

function search() {
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="topnav">
            <a></i><input class="search" id = "searchbar" type="text" placeholder="Search.."></a>
    </div>`
  );
}

function home() {
  document.body.classList.add("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("shop");
  document.body.classList.remove("region");
}

function homeintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.display.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the Home </h3>
    </div>
    
    <div data-aos="fade-up" class="display-card">
    <h3 class="info">Overview</h3>
    <p>This website takes all its information from the pokemon api {poke api}.
    </p>

    <p>The search bar is there for aesthetics. It doens't work. </p>
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
  DOMSelectors.display.innerHTML = "";
  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the PC</h3>
      <p>There are about 150 pokemon present from the first generation of pokemon. </p>
    </div>`
  );
  fetchpokemon();
}

function item() {
  document.body.classList.add("shop");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("region");
}

function shopintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.display.innerHTML = "";

  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the shop </h3>
      <p>All Items are currently displayed.</p>
    </div>`
  );
  fetchitems();
}

function region() {
  document.body.classList.add("region");
  document.body.classList.remove("home");
  document.body.classList.remove("poke");
  document.body.classList.remove("shop");
}

function regionintro() {
  DOMSelectors.maininfo.innerHTML = "";
  DOMSelectors.display.innerHTML = "";

  DOMSelectors.maininfo.insertAdjacentHTML(
    "beforeend",

    `<div data-aos="fade-up" class="display-card">
      <h3 class="info">Welcome to the Map </h3>
      <p>These are all the current locations. </p>
    </div>`
  );
  fetchlocations();
}
