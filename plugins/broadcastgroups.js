let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n\n「 *BROADCAST* 」')
  for (let id of groups) {
  metadatas = await conn.groupMetadata(id).catch(console.log)
  metadata = metadatas.participants.map(v => v.jid)
  if (m.mtype == 'conversation' || m.mtype == 'extendedTextMessage') {
  conn.reply(id, `「 *BROADCAST* 」\n\n${text}`, false ,{ contextInfo: { mentionedJid: metadata }})
  } else conn.copyNForward(id, content)
  }
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)