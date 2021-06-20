let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Bot Telah Di Unmute 🔊')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|unmute$/i
handler.owner = true

module.exports = handler