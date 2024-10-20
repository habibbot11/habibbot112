module.exports = {
  config: {
    name: "😐",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "send you pic of messi",
    longDescription: "",
    category: "𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/kGs0cHp.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「︵❛❛༎💚︵\n🌺🦋🦋🌺-যে তােমার রাগ অভিমান আলাদা করে বুঝবে😊\nসে তােমাকে দিনশেষে একবার হলেও খুজবে!🥰🥀🌹︵❛❛༎💚🌺\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
