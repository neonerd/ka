const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { exec } = require('node:child_process');

function printString (str) {
    const outputFile = path.join(__dirname, 'output.txt')

    fs.writeFileSync(outputFile, str, 'utf8')
    exec(`start /min notepad /P ${outputFile}`)
}

function incrementManifestoNumber () {
    manifestoNumber++
    console.log('incrementing manifesto number to: ' + manifestoNumber)
    fs.writeFileSync(path.join(__dirname, 'manifestoNumber.txt'), String(manifestoNumber), 'utf8')
}

app.get('/', (req, res) => {
    res.send({manifestoNumber: manifestoNumber})
})

app.post('/', (req, res) => {
    const data = req.body
    console.log(data)
    printString(data.manifesto)
    incrementManifestoNumber()
    res.send(data)
})

// ===
// === BOOTSTRAP
// ===

console.log('bootstraping server')

let manifestoNumber = Number(fs.readFileSync(path.join(__dirname, 'manifestoNumber.txt'), 'utf8'))

console.log('manifesto number is: ' + manifestoNumber)

app.listen(3000)