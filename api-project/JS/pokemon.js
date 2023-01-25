document.getElementById("display").innerHTML = "";

async function fetchpokemon() {
  let pokemons = [];
  loading();
  for (let i = 1; i < 151; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const pokemon = await response.json();
      pokemons.push(pokemon);
    }
  }

  showpokemon(pokemons);
}
function loading() {
  document.getElementById("display").insertAdjacentHTML(
    "beforeend",

    `<div class="col-3">
    <div class="snippet">
      <div class="stage">
        <div class="dot-flashing"></div>
      </div>
    </div>
  </div>`
  );
}
function showpokemon(pokemons) {
  document.getElementById("display").innerHTML = "";
  pokemons.forEach((pokemon) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
  <img class="display-sprite" src="${pokemon.sprites.front_default}" />
  <h4 class="display-name">${pokemon.name}</h4>
  <h5 class="display-type"> type: ${pokemon.types
    .map((type) => type.type.name)
    .join(", ")}</h5>`
    );
  });
}

export { fetchpokemon };
