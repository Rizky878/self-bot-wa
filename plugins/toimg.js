const { spawn, exec } = require('child_process')
let fs = require('fs')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
  encmedia = await m.getQuotedObj()
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = Math.floor(Math.random() * 900)+'toimg.png'
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
						if (err) return m.reply('Gagal, pada saat mengkonversi sticker ke gambar')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(m.chat, buffer, MessageType.image, {quoted: m, caption: '>//<'})
				fs.unlinkSync(ran)
					})
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler