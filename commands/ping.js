const dash = require('dashargs');
module.exports = {
    text: '!wrekt',
    callback: async (msg) => {
        if (msg) {
            const args = dash.parse(msg.content);
            console.log(args);
        }
        msg.channel.send("get wrekt");
    },
  };