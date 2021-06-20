let fetch = require('node-fetch')
let handler = async (m, { text }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
  let url = await fetch('https://waifu.pics/api/nsfw/neko')
  let ardiganz = await url.json()
  let hasil = `Link ${ardiganz.url}`
 // conn.fakeReply(m.chat, '*_Sabar sedang mengirim hentai..._*','0@s.whatsapp.net','Orang sabar di sayang mantan:)')
conn.sendFile(m.chat, ardiganz.url, 'filename', hasil, m, false, { thumbnail: require('fs').readFileSync('src/18+.png') } )
}
handler.command = /^hentai$/i
handler.register = true
handler.tags = ['sange']
handler.help = ['hentai']
handler.limit = true

module.exports = handler