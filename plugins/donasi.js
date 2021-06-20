let handler = async m => m.reply(`
╭─「 Donasi  」
│ • Gopay : [6281215199447]
│ • Indosat Ooredoo [6285642337380]
│ • Telkomsel [081215199447]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler