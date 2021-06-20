let axios = require('axios')
let handler = async (m, { text, usedPrefix }) => {
  if (!text) throw `Ketik ${usedPrefix}cuaca daerah/kota\n*Contoh*: ${usedPrefix}cuaca bandung`
  let res = await axios.get(`http://recoders-area.caliph.repl.co/api/cuaca?kota=${text}`)
  let json = res.data
  if (json.error) throw 'Maaf kota yang kamu cari tidak tersedia'
  let { tempat, angin, cuaca, deks, suhu, udara, kelembapan, angin } = json.respon
  let teks = `
Cuaca daerah *${tempat}*

*Cuaca:* ${cuaca}(${desk})
*Suhu:* ${suhu}
*Kelembapan:* ${kelembapan}
*Angin:* ${angin}
`
  conn.reply(m.chat, teks.trim(), m)
}
handler.help = ['cuaca _daerah_ '].map(v => v + '\n┃ _Info Cuaca daerah_')
handler.tags = ['tools']
handler.command = /^cuaca$/i

module.exports = handler