//by Caliph, Gosah Cepu Ya ngentot
const Canvacord = require('canvacord')
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
let image = await q.download()
try {
Canvacord.Canvas.circle(image)
  .then(async buffer => {
   stik = await require('../lib/sticker').sticker(buffer, null, packname, author); conn.sendMessage(m.chat, stik, 'stickerMessage')
  }) 
 } catch (e) {
   m.reply('Error:\nStatus: 404')
m.reply(`${e}`)
  }
}
handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^circle$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler