module.exports = {
 config: {
	 name: "😌",
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
 if (event.body && event.body.toLowerCase() === "😌") {
 return message.reply({
 body: " 「 ⭕-এই--!- শহরে-প্রিয়জন-⭕-বলতে- কিছু-!!নেই-⭕\n🌸-সব-!!টুকুই--!!-প্রয়োজন-!!--🌸\n❝---!!-যখন-!!-প্রয়োজন!!-ফুরিয়ে-!!𝔄যায়-!!-- ❞\n🦋--ঠিক -!!--তখনই--🦋\n-!!-প্রিয়-!মানুষগুলো🥀 ---রং--!বদলায়-!!\n🌺-----⭕----🌺🙂\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/gs92ojF.mp4")
 });
 }
 }
}
