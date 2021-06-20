let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#joox menepi*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${text}&apikey=Tobzzz17`).then ((res) => {
	 	let hasil = `*Title:* ${res.data.result.judul}\n*Album:* ${res.data.result.album}\n*Publikasi:* ${res.data.result.dipublikasi}\n\n*Follow*\nhttps://instagram.com/caliph91_`

    conn.sendFile(m.chat, res.data.result.thumb, 'joox.jpeg', hasil, m)
    conn.sendFile(m.chat, res.data.result.mp3, 'joox.mp3', hasil, m)
	})
}
handler.help = ['joox'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(joox)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler