const fetchpokemon = () => {
  const promises = [];
  for (let i = 1; i <= 905; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.image,
      image: data.sprites[" front_default "],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    console.log(pokemon);
  });
};

fetchpokemon();

// export { fetchpokemon };
