const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARHAM-FAROOQUE~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZWRnp0b0xkZHRBRjg4RDBJMm5aNVo0SkcwSCtvNVpVdW44QWwrQzYxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzdMU0pVY0M4bHNvcTE1TDZYaU56S1J0eUo0OUJLdFNIdU5UYTVEaStFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRWdVSUpHOTQrNkw0ck9ITENQWmxpZ2xQOEVkSElheEpyMFVRK2NsL0dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Tm9tTEgrYVFTN3dGYWtOL1hLVzVONzRGaFdBS3RQWkZyMmE5WndZSlh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JQVFDL2hQelNaamRnMEtpVEI3SmMwOXN3MDI5eStRS0VLZDVZd0tqM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxNUmgwa0VTRXY5RHA3QTdCRDlNNk5IR3VLTFdRSHpTeWZTeDcvUkJwVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUszcEZmTkVjVVZESWZpZyszaG1McTIzcjRTNjJZTkxFOUh5TXZZZ0lFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHJYTThqZUp0V1lqZ01hOEVHUkJUU3VjWllicmduL0ZDc004bXhLRnZDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9za3o1VTErVTk5OFVVQXI4RUJvSWNURWlYNDFmYm93SXRzeHM4QWVyQmFVanZoejVkT2ZjY2VveDFxcWZYc0NQQnNwclN1bFNoNFVqRmlGK2FWdUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJ0TlU1N3lnd3JDbzFkZHR0cEZsYmpVSzlTSllQSXlWMk9zdVNwYWNqMU5RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5Qlc5TTRYSCIsIm1lIjp7ImlkIjoiOTIzMzQ5MDA1OTY2OjY4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTcxMDM0NzQxMzY2ODM0OjY4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkdsLzVzR0VMQ2R6c1VHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZTlLbUExdGozelBIaGlDZzE5TitYNmd0Y3lnb29lVHl2TE92YVpObjlIND0iLCJhY2NvdW50U2lnbmF0dXJlIjoicUtGQmhURlRPaVI1SUNpb0duK014a2hLWGVzTWZLWkwyV0dmN2NxYzQzcFlzTWpXRTB2ejZZS0NjQ2NOWURWWWdUL1Y3L1o4d3VidkFMWDdKR2R5Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhhaG9JS1BNNFZtQ1A0RVVLTFU5L0lpMitEQWQ5M0V4Wm1QbmwzeVRNWVQ1by9nRENUUmJxL3FFV05jUG92dnd1OElFTkRqL0l4QTFFdzV1N0tQSUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ5MDA1OTY2OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2U3BnTmJZOTh6eDRZZ29OZlRmbCtvTFhNb0tLSGs4cnl6cjJtVFovUisifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjU5Nzk0MSwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
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
