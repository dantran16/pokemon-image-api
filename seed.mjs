import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"
import csv from 'csvtojson'
import connectMongoose from "./config/database.mjs";
import PokemonImage from "./src/models/PokemonImage.mjs";

connectMongoose().catch(err => console.log(err))

const { SERVER_URL } = process.env;
const csvFilePath = 'init.csv'
const data = await csv().fromFile(csvFilePath)

for(const pokemon of data){
    pokemon.imageUrl = `${SERVER_URL}${pokemon.imageUrl}`
    pokemon.silhouetteImageUrl = `${SERVER_URL}${pokemon.silhouetteImageUrl}`
}


const seedDB = async () => {
    await PokemonImage.deleteMany({})
    await PokemonImage.insertMany(data)
}

seedDB().then(() => {
    console.log("Inserted")
    mongoose.disconnect()
})