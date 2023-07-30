import dotenv from 'dotenv'
dotenv.config()
import server from './config/server.mjs';
import connectMongoose from './config/database.mjs';
import PokemonImage from './src/models/PokemonImage.mjs';

const PORT = process.env.PORT || 3000;

connectMongoose().catch(err => console.log(err))

server.get('/', (req, res) => {
    res.send(`
        <h1>Pokemon Image API</h1>
        <p>/pokemon - JSON File for all Pokemon in this database</p>
        <p>/pokemon/:pokedexEntry - Get a specific Pokemon 
    `);
})

server.get('/pokemon', async (req, res) => {
    try{
        const pokemonData = await PokemonImage.find()
        if(pokemonData == null){
            return res.status(404).json({message: 'Cannot find any pokemon data'})
        }
        res.json(pokemonData)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
})
server.get('/pokemon/:pokedexEntry', async (req, res) => {
    try{
        const pokemon = await PokemonImage.findOne({pokedexEntry: req.params.pokedexEntry})
        if(pokemon == null){
            return res.status(404).json({message: 'Cannot find this Pokemon entry'})
        }
        res.json(pokemon)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})