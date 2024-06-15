//https://raws.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector(".container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const baseImgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pukiman");

    const pokeImg = document.createElement("img");
    pokeImg.src = `${baseURL}${i}.png`;

    const pokeImg2 = document.createElement("img");
    pokeImg2.src = `${baseImgURL}${i}.png`;

    const label = document.createElement("span");
    label.textContent = `#${i}`;
    




    pokemon.appendChild(pokeImg);
    pokemon.appendChild(pokeImg2);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}