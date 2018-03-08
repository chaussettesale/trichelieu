const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on("ready", function () {
    bot.user.setActivity("Caravan War");
    console.log("Je suis connecté !");
});
bot.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong !')
  }
})
bot.login('NDIxMDU4MTkyNTEzMTcxNDU3.DYLUrQ.gSin10CNlao1TPeM7kltokBYzjM')
