module.exports = {
 config: {
   name: "love you",
   version: "1.0",
   author: "𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Joy") {
 return message.reply({
 body: "বস জয় এখন কাজে বিজি আছেন,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/4Kp39mP.jpeg")
 });
 }
 }
}
