const Discord = require('discord.js')
const fs = require('fs')

const set = require('./src/settings')
let rules = fs.readFileSync('./src/rules.md', 'utf8')
let synthaxe = fs.readFileSync('./src/synthaxe.md', 'utf8')
let help = fs.readFileSync('./src/help.md', 'utf8')
const Client = new Discord.Client()

Client.on('ready', () => {
  console.log('Bot ready :D')
  Client.user.setActivity('Somethings ¯|_(ツ)_|¯')
})

Client.on('message', ({ author, content, guild }) => {
  if (author.lastMessage.content.startsWith('!ModifyRules') && author.id === guild.ownerID) {
    console.log(guild.ownerID)
    console.log('setup rules.md')
    fs.writeFile('./src/rules.md', (rules = content.split('!ModifyRules')), err =>
      author.send(err ? `Erreur en changeant les regles: \`${err.message}\`` : `regles mises a jour !` + ' \n' + guild.name)
    )
  }
})

Client.on('message', message => {
  if (!message.guild) return
  if (message.content.startsWith('!question')) {
    console.log('send reply at !question')
    message.channel.send('https://www.youtube.com/watch?v=AsB2eK4nPjM')
  } else if (message.content.startsWith('!rules')) {
    console.log('send rules')
    message.reply('Look tes mp ;)')
    message.author.send(rules)
  } else if (message.content.startsWith('!server')) {
    message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount} \n Owner : ${message.guild.owner}`)
  } else if (message.content.startsWith('!synthaxe')) {
    console.log("envoie l'aide synthaxe à " + message.author.username)
    message.channel.send(synthaxe)
  } else if (message.content.startsWith('!help')) {
    console.log('envoie la listes des commande à ' + message.author.username)
    message.channel.send(help)
  }
})

Client.on('guildMemberAdd', ({ user, guild }) => {
  console.log('send reply at every add to the chanel')
  user.send(
    ':dragon: Bienvenue à toi sur le Discord de **__' +
    guild.name +
    '__** <@' +
    user.id +
    "> ! Je t'invite à lire les **règles** du serveur ainsi que le **mode d'emploi de Discord** dans le chan ***__#infos__***, à te présenter dans le salon ***__#general___*** et faire connaissance avec tout le monde ! :dragon:"
  )
  user.send(rules).catch(console.error)
})

Client.login(set.token)