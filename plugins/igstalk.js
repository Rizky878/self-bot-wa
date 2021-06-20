let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#igstalk caliph91_*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`http://docs-jojo.herokuapp.com/api/stalk?username=${text}`).then ((res) => {
	 	let hasil = `~> *Username* :${res.data.username}\n~> *Following* : ${res.data.following} Following\n~> *Followers* : ${res.data.followers} Followers\n~> *Full Name* : ${res.data.name}\n~> *Category* : ${res.data.category_name}\n~> *Status Private* : ${res.data.is_private}\n~> *Status Verifed* : ${res.data.is_verified}\n~> *Biography* : ${res.data.biography}\n\n*Follow juga*\nhttps://instagram.com/caliph91_`

    conn.sendFile(m.chat, res.data.profile_pic, 'lirik.jpeg', hasil, m)
	})
}
handler.help = ['igstalk'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
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