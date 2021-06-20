let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/darkjokes`)
  let json = await res.buffer()
  conn.sendFile(m.chat, json, 'darkjokes.png', `......`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['fun']

handler.command = /^(darkjokes)$/i

module.exports = handler