const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')

 let handler  = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
      let img = await q.download()
      if (!img) throw 'Foto/Video tidak ditemukan'
      try {
      urlfile = await uploadImage(img)
       conn.sendFile(m.chat, img, 'upload', urlfile, m, false)
      } catch (e) {
      m.reply(`${e}`)
     }
}
handler.help = ['upimg <reply / caption>']
handler.tags = ['nulis']
handler.command = /^(upimg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler
