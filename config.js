const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Zjb2FQYXo4YTUralh2eFg4QmQ3UERlN2w5elBSRDVhZHdJVTcvYU9GWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU1SRk54L1RnMXhaOTVma3VvS3RobjBtOXp5WlNDZUtTMm1EWVh5SWRDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T1VoMEswU1ZFKzY2YmRjc2JBMFV2RmE4OGRkVXVhWExNajk4VTJLRlc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrV09jRlgyRmJ1VWQ1NXVTazdCWUVwVFpaQXlvRGdTR0ZMbXoyR3MzcVc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKTUVrekkrUVl4VVp2aGpJWlhqQlFPYVBtVkJqMGcxVDJvOGVZTUtmWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFyRFQvVmFYS3hUMkVjTTEyNzRZRCtMR0c2UHFORUFlSXloVys3OS9UbEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURod0VnczhQSHRkUzRTM0JwU1E0VFRpTVcrcjIzWGc0MGlIYW9nTkJubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDN3aWtYNXFmdnEwZFNJNlpMdzVsSGVUNWFhY0VKdU42c1Z3Y0JTYjZ6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIL3oyaFpQNkNSeU81b2VOT1pkcVQzNmhPYXZET3ZKU1FpRlloM09Eb1JlVlhFd0RLWG80TGt3MGVxSHgydk1XOGpuWWZRdG9yc1NCbG1ONWNRdGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiIwa2o4ZnYvK2FVOWlvVks5WG5sQ1lIbEkrM0RUSnNDc3I3ZXRJS0cyRTg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJGRlpMRlQ3VCIsIm1lIjp7ImlkIjoiOTIzNDI4NjY4ODYyOjYxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkILDmPCdkIPwnZ+RX/CdkIbwnZChw7jwnZCs8J2QrVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbvCdkITwnZCn8J2QnPCdkKvwnZCy8J2QqfCdkK3wnZCi8J2Qp/CdkKAg8J2QjPCdkJ7wnZCm8J2QqPCdkKvwnZCi8J2QnvCdkKwuLi4uIiwibGlkIjoiMjM0OTU2NTM4Mjk4NjIyOjYxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnExMzVNREVLWCt6Y1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibnZYR2pMQWFYeko0Q0lldTBTcFhwdU5uZHNtZi9sSDJmSWppZzJ1czVFND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHBmcCtoR1k5TWRtYmNXY0tNYVRCYzhXTElKdEtVSU42L0owN0NTSFZnYXJuc0xEdTNyQ1pKcExjTWtWUUNWSTJrT0ZhSnBHYXlJZ01LQWx3VklZRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IldDVXp4Ymh4enVGRFA2WUFnT1NybmlOTFpwUDNUeEhjZ3F3eVBkcERyN2pTQkFQd0FSdVkvZFpBRU5NcE5pQWp5MThMVy9TdDBEYkxhTWhSQWU2Z2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDI4NjY4ODYyOjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo3MXhveXdHbDh5ZUFpSHJ0RXFWNmJqWjNiSm4vNVI5bnlJNG9OcnJPUk8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjU5Mzk2MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
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
