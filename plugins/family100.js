let fetch = require('node-fetch')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
    let res = await fetch(global.API('lol', '/api/tebak/family100', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*Soal:* ${json.result.question}
Terdapat *${json.result.aswer}* jawaban${json.result.aswer.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
+${winScore} XP tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await m.reply(caption),
        { soal: json.result.question, jawaban: json.result.aswer },
        terjawab: Array.from(json.result.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

module.exports = handler
