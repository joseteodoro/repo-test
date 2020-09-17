const request = require('node-fetch')
const url = require('./url.json')

console.log('Downloading...')
request(url.github)
    .then(res => res.json())
    .then(console.log)

console.log('After downloading...')