import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"


const connectMongoose = async () => {
    const url = 'mongodb://127.0.0.1/pokemonImages'
    console.log("Establish new connection with url", url);
    await mongoose.connect(url)
}

export default connectMongoose;