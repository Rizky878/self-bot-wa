let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    if (!args.join) throw 'Teksnya Mana kak?'
    heum = await fetch(`https://recoders-area.caliph.repl.co/api/nulis?text=${args.join(' ')}&apikey=FreeApi`)
    json = await heum.json()
   conn.sendFile(m.chat, json.url, 'nulis', 'Nih Om', m, false)
}
handler.help = ['n'].map(v => v + 'ulis <teks>')
handler.tags = ['nulis']
handler.command = /^nulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

// BY CALIPH NJEENK
// https://GitHub.com/Caliph71/
