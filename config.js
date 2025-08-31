const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUU4aWcwRFNIMEFOT3c0TWdVdkRhNXpvZnlUWDFoWlU2a05GbHhIT3ZrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmRpMU9QNUR3MjJKZ25mNHdFeGhxdW90cFYrS1pEazhKV25aVTNLVFBnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRWRPUy9rK2MzTUJFNU9BWWNEeHdsTnRPbDRMb28weWZBK0pVdnFwYjJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDb2grVEluRmwrcWtNeFhpaTlteDgybTBwL05vRE1yRFRBM3Y2d1ZGMEhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMaXA0NmdUMElRTkp6bWgrRG5HbEZDQXk5SVFLbmY3T3ZBbjFrL0kxbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMzUEc3SVd3YVpUaXNMYUg2TjVobnVDZE53WS9TbmJ3aHVOa2kyZ3E1UW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExlSGxuYWsxNTY3bnFRVGRCYlA4NUZqWmI3YVByU0xMSXI2VUVHVjUwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1dGSmFLNUJFV281b1o0TFFBWFZpdTV1dHVEbEtZM2hnMmtaZW1SRHNHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlliRmFGR0ZmSGhLRGlIdi8vTnU2SXFRNklxbng5aXN1TnJpbGdZUkJvN05VRmg5R0o4bWp4aW8vTmkvNE5MdjVjamhOYzY1TkpuQ1h6RmNCdXNmVkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJrOGJwd0FTZWcrOHhhV2t5ZkRUOStzS09NdUdJV3BZMTVqQVA4cWhrZzZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKWDdLNlE3OSIsIm1lIjp7ImlkIjoiOTIzMzQ5MDA1OTY2OjY5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTcxMDM0NzQxMzY2ODM0OjY5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkdsLzVzR0VJdWt6c1VHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZTlLbUExdGozelBIaGlDZzE5TitYNmd0Y3lnb29lVHl2TE92YVpObjlIND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidHkvVjNVaFBQN2lOdTZNOTRwT1NLMkJEWHNZWkN3Q0RwT2MyVDBHejJVTFF4cjdtQ2hqcFhTZVU4M1FTR3o4OFBuelNpazE3Z1lmRUUxdFdIQzc5QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IldycUxpSWJQSkhDaGMvdW9SdDE5QUg1RjdLTFBkWTJaUnZFVnBqNngydXNKY3R2NDMwcGdYakQ2SlJPbzY2Rm1MbTBJSjhhVWR0K0hLcHp6L2FGOENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ5MDA1OTY2OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2U3BnTmJZOTh6eDRZZ29OZlRmbCtvTFhNb0tLSGs4cnl6cjJtVFovUisifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjU5ODc5OCwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/mg26g2Hv/JOIN-BMTFR-PFPS-747-F962.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923349005966",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭_𝐌𝐝*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭_𝐌𝐝 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/mg26g2Hv/JOIN-BMTFR-PFPS-747-F962.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 𝐅𝐨𝐥𝐥𝐨𝐰 𝐊𝐚𝐫𝐥𝐨 https://whatsapp.com/channel/0029VbBGDN9J3jv19iLog93E",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923349005966",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
