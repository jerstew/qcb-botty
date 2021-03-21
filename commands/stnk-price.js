const argsParser = require('../utils/args-validate');

module.exports = {
    text: '!stnk-price',
    callback: async (msg) => {
        if (msg) {
            if (argsParser.validateArguments(msg.content, argumentsModel)) {
                console.log('proceed with logic yay');
            }
        }
        // var commands = commandParser(msg.content);
        // msg.channel.send("get wrekt");
    }
};

const argumentsModel = [
    {
        name: 'symbol',
        required: true
    },
    {
        name: 'watch',
        required: false
    }
];