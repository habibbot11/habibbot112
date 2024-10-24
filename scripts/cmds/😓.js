 module.exports = {
 config: {
	 name: "😓",
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
 if (event.body && event.body.toLowerCase() === "😓") {
 return message.reply({
 body: "     「︵ 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-  ভালো কিছু পেতে হলে তোমাকে '𝙨𝙖𝙘𝙧𝙞𝙛𝙞𝙘𝙚' করতেই হবে ;-\n^😽আল্লাহ যা করেন ভালোর জন্যই করেন 💚🌸\n𝐈𝐬 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐦𝐨𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐠𝐢𝐯𝐞 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 🖤🌸💚🦋\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/jsQEtKJ.mp4")
 });
 }
 }
}
