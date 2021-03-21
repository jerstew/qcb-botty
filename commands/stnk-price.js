const argsParser = require('../utils/args-validate');
var _ = require('lodash/core');

module.exports = {
    text: '!stnkprice',
    callback: async (msg) => {
        if (msg) {
            let validationStatus = await argsParser.validateArguments(msg.content, argumentsModel);
            if (validationStatus.status === 'failed') {
                !_.isEmpty(validationStatus.reason) ? msg.channel.send("Command failed because: " + validationStatus.reason.toString()) : msg.channel.send("Unknown error");
            } else {
                msg.channel.send("Command passes validation");
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