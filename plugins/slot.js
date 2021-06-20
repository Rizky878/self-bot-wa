let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*SLOT GAME*
BONUS : _9999_ XP

${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} <===
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}

You Lose bro, Coba lagi
`.trim(), m)
    global.DATABASE._data.users[m.sender].exp += 9999
}
handler.help = ['slot']
handler.tags = ['game']
handler.command = /^slot/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}