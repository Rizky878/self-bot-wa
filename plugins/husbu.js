let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await require('axios').get(`https://recoders-area.caliph.repl.co/api/husbu`)
    json = heum.data.url
  name = heum.data.name
   conn.sendFile(m.chat, json, 'Server Error!', name, m, false)
}
handler.help = ['husbu']
handler.tags = ['wibu']
handler.command = /^husbu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler