import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/bot.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendButton(m.chat, '*๐ท๐พ๐ป๐ฐ, ยฟ๐ฒ๐พ๐ผ๐พ ๐๐ด ๐ฟ๐๐ด๐ณ๐พ ๐ฐ๐๐๐ณ๐ฐ๐?*', wm, [['๐ผ๐ด๐ฝ๐ ๐ณ๐ด ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler
