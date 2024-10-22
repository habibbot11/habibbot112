module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 [.]\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ ✓help [number of page] -> see commands
➥ ✓sim [message] -> talk to bot
➥ ✓callad [message] -> report any problem encountered
➥ ✓help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/pinikjoy4200`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/82re01F.jpeg")
 });
 }
 }
}
