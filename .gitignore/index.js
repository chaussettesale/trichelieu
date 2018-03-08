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

bot.on('message', message => {
   if (message.content === '!tourdesentinelle') {
     message.channel.send('La tour de sentinelle : vitesse d’attaque rapide --> à utiliser contre les ennemis sans armure ou très peu de vie.')
   }
 })

bot.on('message', message => {
              if (message.content === '!anagrammesroger') {
              message.channel.send('Roger le tavernier... Ça en fait des anagrammes ! Le rare goret verni. Le rire va te ronger. Roi, la verge rentre !')
              }
            })
bot.on('message', message => {
                            if (message.content === '!Déesse') {
                            message.channel.send('Ma déesse adorée ? Tout petit devant toi, déesse Sundy…Je t en prie viens en moi, viens à moi…Je ne suis que ton oua…ille, ma foi croit en toi, tu incarnes la garce…LA GRACE…aide-moi… Je me tiens courbé, je suis tout petit mais ma foi grandi mais ma foi gran-dieeee…')
                            }
                          })
 
bot.login('NDIxMDU4MTkyNTEzMTcxNDU3.DYLUrQ.gSin10CNlao1TPeM7kltokBYzjM')
