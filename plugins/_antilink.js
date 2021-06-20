let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
      if (isAdmin || !isBotAdmin) return true
   await m.reply('Hapus!!\n\nLink Grup terdeteksi')
       this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler