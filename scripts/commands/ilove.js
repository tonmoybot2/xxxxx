const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tonmoy")==0 || (event.body.indexOf("তন্ময়")==0 || (event.body.indexOf("@Tonmoy Choudhury")==0 || (event.body.indexOf("@Tonmoy Choudhury")==0)))) {
		var msg = {
				body: "আসসালামু আলাইকুম এই যে জান তুমি কি হচ্ছে আমার বস তন্ময় কে ডাকছো? সে তো এখন ব্যস্ত আছে যদি কিছু বলার থাকে বসের ইনবক্সে নক করে রাখো fb https://www.facebook.com/tonmoy221?mibextid=ZbWKwL 😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
