let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/randomquote?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
  conn.reply(m.chat,`*${f.quote.author}*\n\n\n${f.quote.quotes}`, m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
