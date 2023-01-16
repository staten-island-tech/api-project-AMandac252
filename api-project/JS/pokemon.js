async function fetchpokemon() {
  let pokemons = [];
  for (let i = 1; i < 19; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const pokemon = await response.json();
      pokemons.push(pokemon);
      document.getElementById("display").insertAdjacentHTML(
        "beforeend",

        `<div data-aos="fade-up" class="display-card2">
<img class="display-sprite" src="${pokemon.sprites.front_default}" />
<h4 class="display-name">${pokemon.name}</h4>
<h5 class="display-type"> type: ${pokemon.types
          .map((type) => type.type.name)
          .join(", ")}</>`
      );
    }
  }
}
fetchpokemon();

export { fetchpokemon };
