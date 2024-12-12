const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/VD4VmUX.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("@Tonmoy Chowdhury")==0 || body.indexOf("@tonmoy chowdhury")==0 || body.indexOf("Tonmoy")==0 || body.indexOf("তন্ময়")==0 || body.indexOf("tor boss ke")==0 || body.indexOf("tonmoy")==0 || body.indexOf("boss")==0 || body.indexOf("Jan")==0 || body.indexOf("tuno")==0 || body.indexOf("tono")==0) {
		var msg = {
				body: "🖤আসসালামু আলাইকুম আমার বস তন্ময় চৌধুরী এখন ব্যস্ত আছে যদি আপনার কিছু বলার থাকে আপনি তাকে ইনবক্স করতে পারেন fb link https://www.facebook.com/tonmoy221?mibextid=ZbWKwL🥀",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
