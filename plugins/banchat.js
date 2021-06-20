let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = true
  m.reply('Bot Telah Di mute 🔇')
}
handler.help = ['banchat', 'mute']
handler.tags = ['owner']
handler.command = /^banchat|mute$/i
handler.owner = true

module.exports = handler