document.getElementById("display").innerHTML = "";

async function fetchlocations() {
  let location = [];
  loading();
  for (let i = 1; i < 65; i++) {
    let url = `https://pokeapi.co/api/v2/location-area/${i}`;
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const locations = await response.json();
      location.push(locations);
    }
  }
  showlocations(location);
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
function showlocations(location) {
  document.getElementById("display").innerHTML = "";
  location.forEach((locations) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
  <h3 class="display-name">${locations.name}</h3>

  <h5 class="display-Encountors"> pokemon encounters: ${locations.pokemon_encounters[0].pokemon.name}</>`
    );
  });
}

export { fetchlocations };
