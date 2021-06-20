const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const { MessageType } = require('@adiwajshing/baileys')
const { exec } = require('child_process')

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan angka!!, Contoh #bass 30\n\nMax angka 1-100'
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m  
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=100:width_type=o:width=2:g=${text}/4 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
						if (err) return m.reply('Error!')
						let buff = fs.readFileSync(ran)
						conn.sendFile(m.chat, buff, ran, '.mp3', m)
						fs.unlinkSync(ran)
            })
        } else m.reply('Kirim audio atau tag audio!!')
    } catch (e) {
        console.log(e)
        m.reply('Error! !')
    }
}
handler.help = ['bass']
handler.tags = ['tools']
handler.command = /^(bass)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}