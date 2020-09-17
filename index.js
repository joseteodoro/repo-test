const request = require('node-fetch')

console.log('Downloading...')
request('https://api.github.com/users/octocat/orgs')
    .then(res => res.json())
    .then(console.log)

// console.log('After downloading...')