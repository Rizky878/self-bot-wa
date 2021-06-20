let vas = require('canvacord')
let handler = async (m, { text }) => {
if (!text) throw 'Tidak Ada Url'
m.reply('Creating Shortlink....')
linknye = await bitly(text)

conn.sendMessage(m.chat, linknye, 'conversation', { quoted: m, detectLinks: false })
}
handler.help = ['bitly <url>']
handler.tags = ['internet']
handler.command = /^(bitly)$/i

module.exports = handler

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`https://tobz-api.herokuapp.com/api/bitly?url=${urls}&apikey=Tobzzz17`)

return heh.data.result
}