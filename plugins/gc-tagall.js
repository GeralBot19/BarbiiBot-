let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🦋➢ 𝐀𝐪𝐮𝐢 𝐥𝐱𝐬 𝐢𝐧𝐯𝐨𝐜𝐚 𝐁𝐚𝐫𝐛𝐢 𝐁𝐨𝐭 🩵:  ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 
🦋 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐞𝐬𝐭𝐫𝐞𝐥𝐥𝐢𝐭𝐚𝐬 ✨ - 𝐁𝐚𝐫𝐛𝐢 𝐁𝐨𝐭🩵 \n\n ${oi}\n\n 🦋➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👨🏻‍💻💙≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐁𝐚𝐫𝐛𝐢𝐢 𝐁𝐨𝐭 🦋 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
