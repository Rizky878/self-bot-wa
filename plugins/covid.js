const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch('https://api.kawalcorona.com/indonesia')
        let json = await res.json ()
        let { name, positif, sembuh, meninggal, dirawat } = json[0]
        let text = `
        「Data Corona」\nName: ${name}\nPositif: ${positif}\nSembuh: ${sembuh}\nMeninggal: ${meninggal}\nDirawat: ${dirawat}
        `.trim()
        conn.reply(m.chat, text, m)
        
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['corona']
handler.tags = ['internet']
handler.command = /^(corona)$/i
handler.limit = false

module.exports = handler