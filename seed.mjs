import mongoose from "mongoose"
import csv from 'csvtojson'
import connectMongoose from "./config/database.mjs";
import PokemonImage from "./src/models/PokemonImage.mjs";

connectMongoose().catch(err => console.log(err))

const csvFilePath = 'init.csv'
const data = await csv().fromFile(csvFilePath)
const seedDB = async () => {
    await PokemonImage.deleteMany({})
    await PokemonImage.insertMany(data)
}

seedDB().then(() => {
    console.log("Inserted")
    mongoose.disconnect()
})