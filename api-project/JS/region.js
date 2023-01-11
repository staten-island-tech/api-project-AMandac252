const fetchregion = () => {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const url = `https://pokeapi.co/api/v2/location/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const location = results.map((data) => ({
      name: data.name,
      names: data.names,
      regions: data.region,
      areas: data.areas,
    }));
    console.log(location);
  });
};
fetchregion();

export { fetchregion };
