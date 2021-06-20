let fetch = require('node-fetch')
let waifu = require('waifu.pics')
     let handler  = async (m, { conn, args }) => {
     kk = await require('waifu.pics').fetch('sfw/neko')
   conn.sendFile(m.chat, kk.url, 'neko.jpg', 'nekonya kak', m, false)
}
handler.help = ['neko']
handler.tags = ['wibu']
handler.command = /^neko$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler