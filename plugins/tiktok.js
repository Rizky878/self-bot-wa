let { get } = require('axios')
const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
m.reply('Scraping....')
   let { title, author: auth, statistic:stats , link} = (await get(`https://api.lolhuman.xyz/api/tiktok?apikey=ohayou&url=${args[0]}`)).data.result
    await conn.sendFile(m.chat, link, 'tiktok.mp4', `${auth.nickname} ( *@${auth.username}* )\n\n${title}\n\n👁 Views : ${h2k(stats.playCount)}\n❤ like : ${h2k(stats.diggCount)}\n💬 comment : ${h2k(stats.commentCount)}\n🔗 Share : ${h2k(stats.shareCount)}`, m)
  } catch (e) {
m.reply('Server 1 Error, Trying Server 2')
  json = await require('axios').get(`https://api.lolhuman.xyz/api/tiktok3?apikey=ohayou&url=${args[0]}`)
    await conn.sendFile(m.chat, json.data.result, 'tiktok.mp4', '', m)
  }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok(dl)?)$/i

module.exports = handler