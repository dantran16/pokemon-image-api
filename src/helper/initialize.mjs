import csv from 'csvtojson'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const initialize = () => {
    const csvFilePath = 'init.csv'
    csv().fromFile(csvFilePath).then(jsonObj => {
        const { SERVER_URL } = process.env;
        for(const pokemon of jsonObj){
            pokemon.imageUrl = `${SERVER_URL}${pokemon.imageUrl}`
            pokemon.silhouetteImageUrl = `${SERVER_URL}${pokemon.silhouetteImageUrl}`
        }
        const data = JSON.stringify(jsonObj)
        fs.writeFileSync('initializeDB.json', data)
    })
}


initialize()
