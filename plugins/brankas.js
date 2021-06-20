let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
◪ *「 DOMPET 」*
  ├─ ❏ *Name* : ${username}
  ├─ ❏ *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
  ├─ ❏ *Limit* : ${limit}
  └─ ❏ *Exp* : ${exp}

`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['dompet', 'brankas']
handler.tags = ['xp']
handler.command = /^dompet|brankas$/i
module.exports = handler