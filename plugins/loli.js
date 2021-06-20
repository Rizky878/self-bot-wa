let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await require('axios').get(`https://tobz-api.herokuapp.com/api/randomloli?apikey=Tobzzz17`)
    json = heum.data.result
   conn.sendFile(m.chat, json, 'Server Error!', 'Lolinya kak', m, false)
}
handler.help = ['loli']
handler.tags = ['wibu']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler