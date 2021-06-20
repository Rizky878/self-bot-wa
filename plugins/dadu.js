const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { readdirSync } = require('fs')
let handler  = async (m, { conn, args }) => {
  dir = readdirSync('./src/dadu')
  random = dir[Math.floor(Math.random() * dir.length)]
  conn.sendFile(m.chat, `./src/dadu/${random}`, 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker', 'fun']
handler.command = /^dadu$/i

module.exports = handler