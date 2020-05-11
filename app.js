// to bring in js (see below)
// let movies = require('./movies.js')
// let food = require('./food.js')
// let songs = require('./songs.js')
// let games = require('./games.js')

// console.log(movies, food, songs, games)
// THE CODE ABOVE IS WORKING


// fs is for File System
const fs = require('fs')

fs.writeFile('some.txt', 'Hello World!', err => {
    if (err) {
        console.log(err)
    }
})
// created the some.txt file with the words Hello World
// write file overwrites anything done in the connected file, in this case some.txt
fs.appendFile('some.txt', 'Goodbye World', err => {
    if (err) {
        console.log(err)
    }
})
// if we remove the writeFile overwrite, every time we run node a new append will add rather than just showing the sole text
fs.readFile('some.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
// utf 8 is all basically latin/english character sets

// NPM IS A GREAT SOURCE OF NODE PACKAGES