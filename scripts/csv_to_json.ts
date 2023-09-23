import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse'

const fileName = path.join(__dirname, '..', 'data', 'concepts.csv')
const input = fs.readFileSync(fileName, 'utf8')

parse(input, {}, (err, records) => {
    console.log(records)

    const json = records.map((r: any) => {
        return {
            name: r[0],
            description: r[1],
            manifestoSentence: r[2]
        }
    })

    console.log(json)

    fs.writeFileSync(path.join(__dirname, '..', 'data', 'concepts.json'), JSON.stringify(json, null, 4))
})