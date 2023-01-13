const URL = `https://pokeapi.co/api/v2/pokemon/1`;

async function fetchpokemon(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
<img class="display-sprite" src="${data.sprites.front_default}" />
<h4 class="display-name">${data.name}</h4>
<h5 class="display-type"> type: ${data.types
        .map((type) => type.type.name)
        .join(", ")}</>

</div> `
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchpokemon(URL);

export { fetchpokemon };
