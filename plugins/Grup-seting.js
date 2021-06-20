let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let json = ''
if (!args[0]) throw `List Option : \n- tutup / close\n- buka / open\n- subject <string>\n- desc <string>\n- revoke / reset\n- picture / profile\n\n Example :\n${usedPrefix + command} close`
switch (args[0]) {
	
case 'open':
	
case 'buka': 
json = await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
	break
   
	case 'close':
   
	case 'tutup':
    
	json = await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    break
    
    case 'subject':
    
    if (args.length == 1) return m.reply(`Example : ${usedPrefix + command} ${args[0]} BOT WA`)
    json = await conn.groupUpdateSubject(m['chat'], args.slice(1).join(' '))
  
     break
    
     case 'revoke':
    
     case 'reset':
   
      json = await conn.resetInvite(m.chat)
    
      break
    
      case 'desc':
    
      if (args.length == 1) return m.reply(`Example : ${usedPrefix + command} ${args[0]} BOT WA`)
      json = await conn.groupUpdateDescription(m.chat, args.slice(1).join(' '))
      break
	case 'profile':
     case 'picture':
	 let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply('Tidak ada foto')
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Mime ${mime} tidak support`)
  json = await conn.updateProfilePicture(m.chat, await q.download())
  break

      default: 
      json = { status: 404, msg: `${args[0]} Not Found` }
      }
	

      conn.reply(m.chat, JSON.stringify(json, null, 2), m)
      }
handler.help = ['open', 'buka', 'tutup', 'close', 'subject', 'desc', 'revoke', 'reset', 'profile', 'picture'].map(v => 'setgc ' + v)
handler.tags = ['group']
handler.command = /^(setgc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler