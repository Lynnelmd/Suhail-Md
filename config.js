const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://zokou_database_sn0g_user:J0tTe0SkZ5SZE2dgczlfJClRtonR0OGs@dpg-cqcfjq08fa8c73cp5ffg-a.oregon-postgres.render.com/zokou_database_sn0g"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18294811939";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImorWWRkL2pRb1JUMnZtN28vR2ZhQXN0ZnpNUU4vb2I2WFowKzM3a0RRbTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZ4a0t2NHhxUVl5T0xpdXZOenUtb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWExMWM1NWEtYzJhOC00ZDI0LWJiNmUtZWU0NTI1YzBkMzY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDE4NixcbiAgICAgIDI0MSxcbiAgICAgIDk3LFxuICAgICAgMTY4LFxuICAgICAgMTY3LFxuICAgICAgODksXG4gICAgICAxMzUsXG4gICAgICAxMjEsXG4gICAgICAyNDgsXG4gICAgICAyMjYsXG4gICAgICA4NixcbiAgICAgIDE5LFxuICAgICAgMTA5LFxuICAgICAgMjI3LFxuICAgICAgMTcsXG4gICAgICAxODQsXG4gICAgICAyNDQsXG4gICAgICAxNzAsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjMsXG4gICAgICA0LFxuICAgICAgODEsXG4gICAgICAxMzIsXG4gICAgICAxMDMsXG4gICAgICA0MCxcbiAgICAgIDMwLFxuICAgICAgNjksXG4gICAgICAzLFxuICAgICAgNDYsXG4gICAgICAxMjQsXG4gICAgICAxNjQsXG4gICAgICAxMDIsXG4gICAgICAxNzMsXG4gICAgICA4NSxcbiAgICAgIDI1NSxcbiAgICAgIDE3MyxcbiAgICAgIDE1MSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyR0hQQ05ZTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQyMDUwNTk2ODAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwlqOUIPCdmbbwnZm+8J2ag/CdmbDwnZqBIPCdmbDwnZm6LTQ3IPCWo5RcIixcbiAgICBcImxpZFwiOiBcIjU0OTM3NDMwMDU3MDYyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3ZnbnU0RUVNTHAvclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2R0NsNDdwZzhDMnhCbjhnUmQ4UW0xbUE3NGtvOEtLblpVRjhIZm1Rb21zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpDaFFOR0o1VXJQNDA2QUhFK1NMVTRtUEpBdTZpNTlYUjIvdjlDbE5Va2ZQN3p5WWU4T3BFcHI4KzM4VVJ2cUNvT29MSHVlZnNhL0hQQzlIbWtUTmhBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFVZ0Fsdzlyd2ZMUVA3T1JHMUt0UmM4M1M2Zlh6dkQzRGFhZVFDRWhEbG1HTUtzczNHRTJXWktTOVYrZDFaU0FETjRGd0NOdmErMUVtQjdaQnZ3MERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MjA1MDU5NjgwMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzQyNTMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHQyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvS0QrTGcvQW1lK3cyQVdIcGd5dnRRcENWM25hclRLdnhmMkNzNjBVSC9ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMDQ5MzI0NTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc0MjUzODE3MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𖣔 𝙶𝙾𝚃𝙰𝚁 𝙰𝙺-47 𖣔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
