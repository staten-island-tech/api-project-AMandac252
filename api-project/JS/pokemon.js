async function fetchpokemon() {
  const pokedex = [];
  for (let i = 1; i <= 100000; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokedex.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(pokedex).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
    }));
    displayPokemon(pokemon);
  });
}

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const data = pokemon.map((pokeman) =>
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
      <img class="display-sprite" src="${pokemon.image}" />
      <h4 class="display-name">${pokemon.name}</h4>
      <h5 class="display-type"> type: ${pokemon.types}</h5>
      </div> `
    )
  );
};

fetchpokemon();

export { fetchpokemon };
