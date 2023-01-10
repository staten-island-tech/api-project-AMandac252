import "../Style/style.css";
import "../JS/pokemon.js";

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
    });
  });
}
changeLi();

// /* FUCNTION LIBRARY */
// function original() {
//   DOMSelectors.display.innerHTML = "";
//   songlist
//     .filter((song) => song.type == "original")

//     .forEach((song) => {
//       DOMSelectors.display.insertAdjacentHTML(
//         "beforeend",

//         `<div data-aos="fade-down" class="display-card">
//             <img class="display-img" src="${song.image}" />
//             <h3 class="display-title">${song.title}</h3>
//             <h4 class="display-release">${song.release}</h4>
//             <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
//           </div>`
//       );
//     });
// }

// function cover() {
//   DOMSelectors.display.innerHTML = "";
//   songlist
//     .filter((song) => song.type == "cover")
//     .forEach((song) => {
//       DOMSelectors.display.insertAdjacentHTML(
//         "beforeend",

//         `<div data-aos="fade-down" class="display-card">
//             <img class="display-img" src="${song.image}" />
//             <h3 class="display-title">${song.title}</h3>
//             <h4 class="display-release">${song.release}</h4>
//             <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
//           </div>`
//       );
//     });
// }

// function all() {
//   DOMSelectors.display.innerHTML = "";
//   songlist.forEach((song) => {
//     DOMSelectors.display.insertAdjacentHTML(
//       "beforeend",

//       `<div data-aos="fade-down" class="display-card">
//             <img class="display-img" src="${song.image}" />
//             <h3 class="display-title">${song.title}</h3>
//             <h4 class="display-release">${song.release}</h4>
//             <a href=${song.link} target ="blank"><button class="link-btn">Click to Listen</button>
//           </div>`
//     );
//   });
// }
