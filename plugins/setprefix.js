// MADE BY ADIIXYZ:v

let handler = async(m, { conn, text }) => {

  if (!text) throw `kok gada prefix?\ntros mau jadiin prefix apa?`

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`Prefix bot telah diubah ke : *${text}*`)
}
handler.help = ['setprefix <prefix>']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.rowner = true
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