// lib
const Discord = require('discord.js')
const firebase = require('firebase')
const settings = require('./settings')

// init
firebase.initializeApp(settings.firebaseConfig)
const db = firebase.firestore()
const Client = new Discord.Client()

// event
Client.on('ready', () => {
  console.log('Bot ready')
  Client.user.setActivity('Somethings ¯|_(ツ)_|¯')
})

// Personnaliser le message de bienvenue du serveur
// si admin

// Mp de bienvenue sur un serveur
// en fonction du serveur

Client.on('guildMemberAdd', member => {
  let idServe = member.guild.id

  let post = db.collection('welcomes').doc(idServe)

  post.get().then(doc => {
    const data = doc.data()
    member.user.send(data.bvn)
  }).catch(e => {
    console.log(e)
    member.user.send('Bienvenue sur le serveur ' + member.guild.name)
  }).finally(() => {
    console.log('add ' + member.nickname)
  })

})

Client.on('message', message => {

})

Client.login(settings.token)