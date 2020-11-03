const button = document.querySelector('.button')
const ul = document.querySelector('.ul')

async function getPokemonData() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/ditto/`;
    try {
        const res = await fetch(apiUrl);
        return res.json();
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}


const fetchPokemonData = async () => {
    const result = await getPokemonData();
    return result;
};


button.addEventListener('click', () => {
    fetchPokemonData().then(data => {
        const info = "Pokemon Name: " + data.forms[0].name + ", Weight: " + data.weight;
        let li = document.createElement("Li");
        let textnode = document.createTextNode(info);
        li.appendChild(textnode);
        ul.appendChild(li);
    });
});
