const { QuickDiscordBot } = require("quick-chat-bot-jormy");
require('dotenv').config();
const path = require('path');

const bot = new QuickDiscordBot({
    botToken: process.env.BOT_TOKEN,
    commandsDir: path.join(__dirname, "commands") , // ex. 'commands' 
    ignoreChannels: [] ,//array of channels to ignore messages
    testMode: true,
    testChannel: "dev-test", //single channel to listen to while in test mode
    ignoreBots: true //ignore messages from bots
});
bot.connect();