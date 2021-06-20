let webp = require('node-webpmux')
let util = require('util')

let handler = async (m) => {
    if (!m.quoted) throw 'Tag stikernya!'
    let q = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        json = JSON.parse(img.exif.slice(22).toString())
        m.reply(JSON.stringify(json, null, 2), m.chat, { detectLinks: false })
    } 
}
handler.help = ['getexif']
handler.tags = ['sticker']

handler.command = ['getexif']

module.exports = handler