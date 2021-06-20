const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
  pp = global.API('lol', '/api/random/nsfw/blowjob', {}, 'apikey')
                     await sticker(false, pp, 'NSFW Blowjob', author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['blowjob']
handler.tags = ['sticker']
handler.command = /^blowjob$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler