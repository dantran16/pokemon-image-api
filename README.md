# pokemon-image-api
This API gives you an image of a Pokemon (up to Kanto region). You can get two image URLs (one normal image and one silhouette image). There is a Pokedex entry.

## Requesting data and receiving data
You can send a HTTP request call to one of the two endpoints to get information. 
* /pokemon - JSON of all Pokemon in the database
* /pokemon/:pokedexEntry - based on Pokedex entry, it will return a JSON of that Pokemon

Example of sending a request and receiving data on a React app
```js
const [pokemonList, setPokemonList] = useState([])

// Sending a request
async fetchPokemon = async () => {
    const response = await fetch('http://localhost:3000/pokemon')
    const pokemon = await response.json()
    return pokemon
}

// Once the data is received, it should update the state with the new data.
useEffect(() => {
    fetchPokemon().then(pokemon => {
        setPokemonList(pokemon)
    })
}, [])
```
![image](https://github.com/dantran16/pokemon-image-api/assets/46572878/7edc2a36-5c8f-4d76-b97d-5c066d62c389)
