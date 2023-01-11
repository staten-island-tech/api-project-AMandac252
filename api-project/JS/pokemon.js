const pokedex = () => {
  pokemon();
};
pokedex();

function pokemon() {
  const promises = [];
  for (let i = 1; i <= 905; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      image: data.sprites[" front_default "],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    console.log(pokemon);
  });
  fetchpokemon();
}

async function fetchpokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(url);
  if (response.status < 200 || response.status > 299) {
    console.log(response.status);
    throw error(response);
  } else {
    const pokemon = await response.json();
    pokemon();
    pokemon.data.forEach((data) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",

        `<div data-aos="fade-down" class="display-card">
            <img class="display-img" src="${data.image}" />
            <h3 class="display-title">${data.name}</h3>
            <h4 class="display-release">${data.id}</h4>
            <a href=${data.type} target ="blank">
        </div>`
      );
    });
  }
}
fetchpokemon();

export { fetchpokemon };
