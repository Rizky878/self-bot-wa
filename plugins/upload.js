const { UploadFile } = require('ra-api')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) &&  5000000 > media.length 
  let link = await (isTele ? uploadImage : UploadFile)(isTele ? media : await conn.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo))
  m.reply(`${isTele ? link : link.result.namaFile}
${media.length} Byte(s)
${isTele ? '(No Expiry Date)' : '(Unlimited Time Use + Expired in 2 days)'}`)
}
handler.help = ['upload (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload$/i

module.exports = handler