//byzaky

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
global.kontak2 = [
[owner[0], await conn.getName(owner[0] + '6282289304381@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'zakyyy@gmail.com', true],
[owner[1], await conn.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'zakykak@gmail.com', true],
] //ubah juga om dengan nomor lu 
let nomorwa = '6282289304381'
let nomorwa2 = '6283865775691'

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`6282289304381`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `Ky..? `, `My Skill Copas Script`, `admin@siapazaky.com`, `japanese`, `https://chat.whatsapp.com/DnQZq5BsLzsHRkCaJz8e6t`, `Developer Miharu Ai`],
    [`6283865775691`, `${await conn.getName(nomorwa2+'@s.whatsapp.net')}`, `Sarah💓 `, `Pacar Owner`, `owner@sarah.co.id`, `japanese`, `https://chat.whatsapp.com/DnQZq5BsLzsHRkCaJz8e6t`, `Pacar Owner Jangan Di Ganggu`]
  ], m)
  let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, sentMsg, { mentions: conn.parseMention(caption) })
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler
