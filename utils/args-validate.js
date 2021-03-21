const dash = require('dashargs');
var _ = require('lodash/core');

const validateArguments = async (command, argumentsModel) => {
    const commandArguments = dash.parse(command);
    let required = [];
    console.log(argumentsModel.some(item => item.required));


    // if (!checkRequired(args, argsModel)) {
    //     msg.channel.send("You are missing required argument(s): " + missing);
    // } else {
    //     return;
    // }
};

const checkRequired = async (args, argsModel) => {
    // var missing = [];

};

module.exports = { validateArguments };