const argsParser = require('../utils/args-validate');

module.exports = {
    text: '!stnk-price',
    args: [
        {
            name: 'symbol',
            required: true
        },
        {
            name: 'watch',
            required: false
        }
    ],
    callback: async (msg) => {
        if (msg) {
            if (argsParser.validateArguments(msg.content, this.args)) {
                console.log('proceed with logic yay');
            }
        }
        // var commands = commandParser(msg.content);
        // msg.channel.send("get wrekt");
    }
  };