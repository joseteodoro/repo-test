const request = require('node-fetch')
const url = require('./url.json')
const x = require('./logout')

console.log('Downloading...')
request(url.github)
    .then(res => res.json())
    .then(console.log)

console.log('After downloading...')
console.log('mensagem: ', x.logout())