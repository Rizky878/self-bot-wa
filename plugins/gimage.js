let handler  = async (m, { conn, args, text }) => {
     if (!text) throw 'Cari Apa ?'
 if (text) m.reply('Searching.....')
let gis = require('g-i-s')
gis(text, result)

async function result(error, results) {
if (error) throw error
C = Math.floor(Math.random() * results.length)
Random = results[C]
data = await require('node-fetch')('https://api.imgbb.com/1/upload?key=c93b7d1d3f7a145263d4651c46ba55e4&image='+Random.url).then(v => v.json())
conn.sendFile(m.chat, data.data.url, 'gimage.png', `*── 「 GOOGLE IMAGE 」 ──*\n\n➸ *width*: ${Random.width}\n➸ *height*: ${Random.height}\n➸ *url*: ${data.data.url}`, m)
}
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^gimage$/i
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