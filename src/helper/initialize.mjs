import csv from 'csvtojson'
import fs from 'fs'

const initialize = () => {
    const csvFilePath = 'init.csv'
    csv().fromFile(csvFilePath).then(jsonObj => {
        const data = JSON.stringify(jsonObj)
        fs.writeFileSync('initializeDB.json', data)
    })
}


initialize()
