import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator";

const pokemonImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pokedexEntry: {
        type: Number,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    silhouetteImageUrl:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})
pokemonImageSchema.plugin(uniqueValidator)

const PokemonImage = mongoose.model('PokemonImage', pokemonImageSchema)

export default PokemonImage;