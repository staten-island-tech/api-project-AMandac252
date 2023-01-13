const URL = `https://pokeapi.co/api/v2/item/1`;

async function fetchitem(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
    <img class="display-sprite" src="${data.sprites.default}" />
    <h4 class="display-name">${data.name}</h4>
    <p class="display-description">${data.effect_entries[0].effect}</p>

    </div> `
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchitem(URL);

export { fetchitem };
