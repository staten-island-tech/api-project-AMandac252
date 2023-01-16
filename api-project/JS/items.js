async function fetchitems() {
  let item = [];
  for (let i = 1; i < 19; i++) {
    let url = `https://pokeapi.co/api/v2/item/${i}`;
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const items = await response.json();
      item.push(items);
      document.getElementById("display").insertAdjacentHTML(
        "beforeend",

        `<div data-aos="fade-up" class="display-card2">
<img class="display-sprite" src="${items.sprites.default}" />
<h4 class="display-name">${items.name}</h4>
<h5 class="display-descrtiption"> ${items.effect_entries[0].effect}</>`
      );
    }
  }
}
fetchitems();

export { fetchitems };
