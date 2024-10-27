module.exports = {
 config: {
	 name: "Owner",
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
 if (event.body && event.body.toLowerCase() === "Oner") {
 return message.reply({
 body: " 「𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\n𝗡𝗔𝗠𝗘: 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 𝗪𝗛𝗔𝗧𝗦\n𝗔𝗣𝗣:01709045888\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id=100001741442385\n𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝗦𝗔𝗥𝗜𝗦𝗛𝗔 𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/YZ0RpJW.jpeg")
 });
 }
 }
}
