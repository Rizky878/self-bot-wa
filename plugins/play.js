let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const canvas = require('canvacord')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
const cardJoox = new canvas.Spotify()
                    .setAuthor(vid.author.name)
                    .setAlbum('YouTube')
                    .setStartTimestamp(vid.timestamp)
                    .setEndTimestamp(12)
                    .setImage(thumb)
                    .setTitle(title)
                cardJoox.build()
                    .then(async (buffer) => {
                    conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: `
*Title:* ${title}
*Filesize:* ${filesizeF}
${isLimit ? '*Pakai Link:* '+await bitly(dl_link): ''}
`.trim()})
                    })
   if (isVideo) {
   if (!isLimit) conn.sendMessage(m.chat, await getBuffer(dl_link), 'videoMessage', { caption: title, quoted: m, mimetype: 'video/mp4' })
   } else {
   if (!isLimit) conn.sendMessage(m.chat, await getBuffer(dl_link), 'documentMessage', { filename: title + '.mp3', quoted: m, mimetype: 'audio/mp3' })
   }
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler

async function getBuffer(url) {
ff = await fetch(url)
fff = await ff.buffer()
return fff
}

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`https://tobz-api.herokuapp.com/api/bitly?url=${urls}&apikey=Tobzzz17`)

return heh.data.result
}