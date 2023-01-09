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

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(await response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;

      console.log("subject");
    }
  } catch (error) {
    console.log(error);
    console.log("no subject");
  }
}
