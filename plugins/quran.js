let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.banghasan.com/quran/format/json/acak`).then ((res) => {
	 	let hasil = `*Random Ayat Al-Quran❤️*\n\n${res.data.acak.ar.teks}\n${res.data.acak.id.teks}\nQ.S ${res.data.surat.nama} Ayat ${res.data.acak.id.ayat}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quran'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(quran|randomquran)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler