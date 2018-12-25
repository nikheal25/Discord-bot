const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', function (message) {
   
    if (message.content.toLowerCase() == 'hi' || message.content.toLowerCase() == 'hello') {
        message.reply('Hello there');
    }
    if (message.content.toLowerCase() == 'how are you?') {
        message.reply('I\'m fine');
        message.channel.sendMessage
    }   
});

bot.on('ready', function () {
    console.log('Ready');
});
bot.login('NTI1OTYxODM1MjA0MTgyMDQ2.Dv_F3A.dTi12rYB0ZRG1WGBQ1Oxx9RlH9M');

