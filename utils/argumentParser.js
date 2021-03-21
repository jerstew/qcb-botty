const dash = require('dashargs');
var _ = require('lodash/core');

const validateArguments = async (command, argsModel) => {
    const args = dash.parse(command);
    console.log(argsModel);
    if (!checkRequired(args, argsModel)) {
        msg.channel.send("You are missing required argument(s): " + missing);
    } else {
        return;
    }
};

const checkRequired = async (args, argsModel) => {
    // var missing = [];

};

module.exports = { validateArguments };