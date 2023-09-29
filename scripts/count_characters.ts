import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse'

const fileName = path.join(__dirname, '..', 'data', 'concepts.csv')
const input = fs.readFileSync(fileName, 'utf8')

parse(input, {}, (err, records) => {
    console.log(records)

    const lengths: Record<string, number> = {}

    const json = records.map((r: any) => {
        lengths[r[1]] = r[1].length

        return {
            name: r[0],
            description: r[1],
            manifestoSentence: r[2]
        }
    })

    console.log(lengths)
})