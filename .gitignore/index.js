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
        if (message.content === '!hopital') {
        message.channel.send('Hôpital : soigne les troupes   \n **à utiliser sur les troupes, aide les troupes fragiles à survivre aux dégâts de zone et permet aux tanks de mieux résister.**')
        }
      })
bot.on('message', message => {
        if (message.content === '!arbalete') {
        message.channel.send(' Arbalète : amélioration de la sentinelle avec 2 tirs  \n **à utiliser contre les ennemis sans armure ou très peu de vie.**')
        }
      })

bot.on('message', message => {
        if (message.content === '!tireurelite') {
        message.channel.send('Tireur d’élite : Tir à longue portée et en cône  \n **à utiliser contre des groupes de troupes sans armure.**')
        }
      })

bot.on('message', message => {
        if (message.content === '!eclair') {
        message.channel.send('Tour Eclair : amélioration de la tour de mage avec dégâts avec rebond  \n **à utiliser contre les ennemis avec de l’armure. Attention les charrettes ont presque toutes de l\'armure. **')
        }
      })
bot.on('message', message => {
        if (message.content === '!fournaise') {
        message.channel.send('Fournaise : attaque rapidement et enlève de l’armure pendant 5 secondes. Permet aux autres troupes de taper plus fort. Ne rate aucune attaque  \n **à utiliser contre des troupes qui esquivent ou avec beaucoup de points de vie et de l’armure. Permet de tuer rapidement.**')
        }
      })
bot.on('message', message => {
        if (message.content === '!lancemissiles') {
        message.channel.send('Lance-missiles : Le mortier devient anti-aérien longue portée  \n ** à utiliser sur des groupes d’unités au en l’air sans armure. Attention le Séraphin n’est pas une unité aérienne ! **')
        }
      })
bot.on('message', message => {
        if (message.content === '!canon') {
        message.channel.send('Canon : amélioration du mortier avec 3 tirs  \n ** à utiliser sur des groupes d’unités au sol sans armure.**')
        }
      })
bot.on('message', message => {
        if (message.content === '!armurier') {
        message.channel.send('Armurier : amélioration de l’hôpital, ajoute de l’armure  \n ** à utiliser sur les troupes, aide les troupes fragiles à survivre aux dégâts de zone et permet aux tanks de mieux résister. A préférer sur des troupes fragiles avec de gros dégâts. Attention : plusieurs armureries ne se cumulent pas. **')
        }
      })
bot.on('message', message => {
        if (message.content === '!tambours') {
        message.channel.send('Tambours : amélioration de l’hôpital, augmente la vitesse d’attaque   \n ** à utiliser sur les troupes, aide les troupes fragiles à survivre aux dégâts de zone et permet aux tanks de mieux résister. A préférer sur des troupes déjà résistantes qui manquent un peu de puissance. Attention : plusieurs tambours ne se cumulent pas.**')
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
                            message.channel.send(' Pour me controler il faut taper l\'une des commandes suivantes:\n\n **__Catégorie Stratégie:__**\n\n ```!tourdesentinelle \n   !arbalete \n   !tireurelite \n!tourdemage \n   !eclair \n   !fournaise \n!tourdemortier \n   !canon \n   !lancemissiles \n!hopital \n   !armurier \n   !tambours ```\n\n **__Catégorie Fun:__**\n\n ```ping``` \n\n **__Catégorie Tricheliade:__**\n\n ```!anagrammesroger \n!déesse \n!chante ``` ')
                             }
                             })
     
 bot.login('NDIxMDU4MTkyNTEzMTcxNDU3.DYMNAQ.9eabdClNS_vN0DQxD0gfXE5hec8')
