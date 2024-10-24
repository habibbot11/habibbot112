 module.exports = {
 config: {
	 name: "😐",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "😐") {
 return message.reply({
 body: " 「 ︵❛❛༎💚︵\n🌺🦋🦋🌺-যে তােমার রাগ অভিমান আলাদা করে বুঝবে😊\nসে তােমাকে দিনশেষে একবার হলেও খুজবে!🥰🥀🌹︵❛❛༎💚🌺\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/kGs0cHp.mp4")
 });
 }
 }
}
