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
        message.channel.send('Tour de sentinelle : vitesse d’attaque rapide \n **à utiliser contre les ennemis sans armures ou très peu de vie.**')
        }
      })

 bot.on('message', message => {
        if (message.content === '!tourdemage') {
        message.channel.send('Tour de mage : vitesse d’attaque modérée mais supprime les armures \n **à utiliser contre les ennemis avec de l’armure. Attention les charrettes ont presque toutes de l\'armure. **')
        }
      })

 bot.on('message', message => {
        if (message.content === '!tourdemortier') {
        message.channel.send('Tour de mortier : dégâts de zone \n **à utiliser sur des groupes d’unités au sol sans armure.**')
        }
      })

      bot.on('message', message => {
                            if (message.content === '!anagrammesroger') {
                            message.channel.send('Roger le tavernier... Ça en fait des anagrammes !\n Le rare goret verni...\n Le rire va te ronger...\n Roi, la verge rentre !')
                            }
                          })
      bot.on('message', message => {
                            if (message.content === '!déesse') {
                            message.channel.send('Ma déesse adorée ? Tout petit devant toi, déesse Sundy…Je t\'en prie viens en moi, viens à moi…Je ne suis que ton oua…ille, ma foi croit en toi, tu incarnes la garce…LA GRACE…aide-moi… Je me tiens courbé, je suis tout petit mais ma foi grandi mais ma foi gran-dieeee…')
                            }
                          })
      bot.on('message', message => {
                            if (message.content === '!chante') {
                            message.channel.send('Pillons le seigneur mes frères et honorons ses sœurs !\n Hosanna... hosanna... ose Anna me toucher plus bas... \n ose anna me tâter par là ! Allez lou ya... toi aussi vient là !\n  Mon cierge est allumé, la cire prête à couler, pour cette immaculée, c\'est l\'heure de communier...')
                            }
                          })
      bot.on('message', message => {
                            if (message.content === '!help') {
                            message.channel.send(' Pour me controler il faut taper l\'une des commandes suivantes:\n\n **__Catégorie Stratégie:__**\n\n ```!tourdesentinelle \n!tourdemage \n!tourdemortier ```\n\n **__Catégorie Fun:__**\n\n ```ping``` \n\n **__Catégorie Tricheliade:__**\n\n ```!anagrammesroger \n!déesse \n!chante ``` ')
                             }
                             })
     
 bot.login('NDIxMDU4MTkyNTEzMTcxNDU3.DYMNAQ.9eabdClNS_vN0DQxD0gfXE5hec8')
