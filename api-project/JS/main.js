import "../Style/style.css";

const DOMSelectors = {
  maininfo: document.querySelector(".main-info"),
  display: document.querySelector(".display"),
  search: document.querySelectorAll(".search"),
  home: document.querySelector("fas fa-home"),
  pokemon: document.querySelector("fas fa-laptop"),
  store: document.querySelector("fas fa-shopping-cart"),
  region: document.querySelector("fas fa-map"),
};

DOMSelectors.angel.addEventListener("click", function () {
  document.body.classList.add("cool");
  document.body.classList.remove("warm");
});

DOMSelectors.maininfo.insertAdjacentHTML(
  "beforebegin",

  `<div data-aos="fade-down" class="info">
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!
      </div>
    </div>`
);

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
