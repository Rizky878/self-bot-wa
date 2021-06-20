let fetch = require('node-fetch')
     let handler  = async (m, { conn, args, text, usedPrefix}) => {
result = text.split('.')
     if (!result) throw `Command : ${usedPrefix}pinterest query.total\nExample : ${usedPrefix}pinterest anime.2`
if (!result[1]) throw 'Jumlah Tidak Boleh Kosong!!!'
if (!result[0]) throw 'Query Tidak Boleh Kosong!!!'
if (isNaN(result[1])) return throw 'Jumlah Harus Berupa Angka!!!'
 if (result[0]) m.reply('Searching.....')
for (i of '.'.repeat(result[1])) {
    heum = await fetch(`https://api.vhtear.com/pinterest?apikey=ameysbot&query=${encodeURI(text)}`)
    json = await heum.json()
    random = json.result[Math.floor(Math.random() * json.result.length)]
   get = await conn.getFile(random)
   conn.sendMessage(m.chat, get.data, 'imageMessage', { quoted: m, mimetype: get.mime })
}
}
handler.help = ['pinterest <query>']
handler.tags = ['tools']
handler.command = /^pinterest$/i
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