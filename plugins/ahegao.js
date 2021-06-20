let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/ahegao')).data
   conn.sendFile(m.chat, json.url, 'ahegao.jpg', json.title, m, false)
}
handler.help = ['ahegao']
handler.tags = ['sange']
handler.command = /^ahegao$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler