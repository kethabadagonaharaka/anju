//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hSc2hoZ3Z6TjN1VS9TdTVOWmZtekVJWDRCQVdNbXV3dnlVSVRjSmZVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnYxRUJ1U25hSmsvcXpjd0U1M28yMEpJVlViOHU5MGUzNWhhYkp1RnVTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT0dXSmpKUTkvY2wvRFRzSENNbUxFVjVISjhTT0U4MkxyZng4dTVVRVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySHliNGROYmJJa1VHakFhTWMwQkFjVnVJL1lCZk1WK2duVGJ6TllTdDBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGUFBvd1BVMjNENU90bThzOGxlbDh4WTRHTHFnTUJOdWJQSm9oa3FlSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml0WllNZEV2RjRDcHpYSlVINUZzYWd3YlJ0d2t1YVJhTExya0FTRFpjZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9IZ0k2Y05uT3Z3M1hPVG0xbDIzbzN1TmZUVU9iNWs2NnJnZHZ3TTFXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEwK1hKdHhSVWg4TFh6RXZyaWlhZGlzU2x6bW9hdW45M2t2L2xvM095OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5aGNJZ251UHZBeHdPbFFEZzFXYnFORWxFelBBdmQvMExCeUY2YlRJaW96Z1FOelNFa1c4Z1dEUDVxT09vSDJ2V1ZEQkhmb3lVQ25DdXhSYjdraWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlhvYStGOERJbG9mdFpJeW1SYzdwSE91N1VyY0ljMldIVjJuNHVrcWhOUlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVGN3hGNDBMUjkyM211Qi1rSGpmdWciLCJwaG9uZUlkIjoiYjMyYmI4NmEtMzE3Yi00YjM4LThlNjAtN2ZjZTBiNmEyOWRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktiQ1RUWWNmZ21iNGx1VytHM3N5TWE4Z2tXST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia25uVHZXZVRpRlRaa1MxbGFXQkNHdmlUNGNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWl2a0xRRUVPVHVsc0lHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZjlaay9EaHJEMTkyMW9nOWlYd3o2aHNDbSt2aTBTK2I4VXJkbXg2ekt6az0iLCJhY2NvdW50U2lnbmF0dXJlIjoib2dEMkhnUWFwUHpnWG5NdTFLbzlNVzRsUjlVQTZGSzJsQXBQU0VQMHRpc3pBai9DdjQxQ000M0FoM2k3N0twQ091MVlSUlM5SC9YVUwvYTNtVy96QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVnaXErTnRKZ0N4QnNNc3ppcUNRVmxHeHFyZnVLRlI2SElmWmJScE5uVThTMWl0ZndaZlk2YmwwUUs3aEowVlJ0dldENU9TbDRONG0zUEZnM2cxT2pnPT0ifSwibWUiOnsiaWQiOiI5NDc2ODUxMTY1ODo2N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZGp8J2SjfCdkoLwnZKE8J2SjCDwnZGq8J2SgvCdkpUiLCJsaWQiOiIyMDY2MDk2ODY5ODY3OTM6NjdAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY4NTExNjU4OjY3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgvV1pQdzRhdzlmZHRhSVBZbDhNK29iQXB2cjR0RXZtL0ZLM1pzZXN5czUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTM5OTQwMCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1HQiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94768511658",
  PASSWORD: 
    process.env.PASSWORD || "20060727July@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
