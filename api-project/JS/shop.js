const fetchitems = () => {
  const promises = [];
  for (let i = 1; i < 490; i++) {
    const url = `https://pokeapi.co/api/v2/item/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const items = results.map((data) => ({
      name: data.name,
      image: data.sprites[" default "],
      cost: data.cost,
    }));
    console.log(items);
  });
};
fetchitems();

export { fetchitems };
