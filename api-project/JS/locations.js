const URL = `https://pokeapi.co/api/v2/location/1`;

async function fetchlocations(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",

      `<div data-aos="fade-up" class="display-card2">
    <h4 class="display-name">${data.name}</h4>
    <h5 class="display-region"> Region: ${data.region.name}</>

    </div> `
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchlocations(URL);

export { fetchlocations };
