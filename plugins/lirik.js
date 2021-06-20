let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`https://recoders-area.caliph.repl.co/api/lirik?q=${text}`).then ((res) => {
	 	let hasil = `~> *Artist* : ${res.data.result.penyanyi}\n~> *Title* : ${res.data.result.judul}\n\n\n${res.data.result.lirik}`

    conn.sendFile(m.chat, res.data.result.thumb, 'lirik.jpeg', hasil, m)
	})
}
handler.help = ['lirik'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(lirik)$/i
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