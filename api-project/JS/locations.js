async function fetchlocations() {
  let location = [];
  for (let i = 1; i < 65; i++) {
    let url = `https://pokeapi.co/api/v2/location-area/${i}`;
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const locations = await response.json();
      location.push(locations);
      document.getElementById("display").insertAdjacentHTML(
        "beforeend",

        `<div data-aos="fade-up" class="display-card2">
<h4 class="display-name">${locations.name}</h4>
<h5 class="display-Encountors"> pokemon encounters: ${locations.pokemon_encounters[0].pokemon.name}</>`
      );
    }
  }
}
fetchlocations();

export { fetchlocations };
