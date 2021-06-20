global.owner = ['6281215199447', '6285642337380'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  clph: 'https://recoders-area.caliph.repl.co',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
   'https://api.lolhuman.xyz': 'ohayou',
  'https://api.xteam.xyz': 'MIMINETBOT'
}

// Sticker WM
global.packname = 'WhatsApp Bot'
global.author = '@caliph91_'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})