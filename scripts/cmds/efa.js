module.exports = {
 config: {
	 name: "efa",
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
 if (event.body && event.body.toLowerCase() === "🙂") {
 return message.reply({
 body: " 「 ╮/╱🌼🌾\n🌼প্রিয়⊰💏\n╱/ ╰┛●───༆🌷❤️\n🥰❥༊━━❝তোমার ༅༎মন༅༎ খারাপের ༅༎ কারন ༅༎হতে༅༎ চাইনা༅༎!ღ᭄∘࿐🌻💚\n❥༊━━❝হঠাৎ༅༎ মনে পড়া ༅༎ঠোঁটের কোনে༅༎মুচকি ༅༎হাসির༅༎___🌸💙\nღকারন ༅༎হতে ༅༎চাই༅༎ღ᭄∘࿐🌻💚\n🌺●───ꃳ───●🌺\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/IBiJHGq.jpeg")
 });
 }
 }
}
