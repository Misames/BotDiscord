# botDiscord
simple bot
Built with [nodejs](https://nodejs.org/en/) and the [discordjs](https://discord.js.org/#/) library.

<<<<<<< HEAD
### Setup
 - You need `git` and `nodejs` on your system
 - create a `user bot`
    It will have a `bot ID` and a `bot token`.
=======
Simple bot qui renvoie des réponses, si on la questionne avec des commandes.
Fait avec : [nodejs](https://nodejs.org/en/) et [discordjs](https://discord.js.org/#/) librairie.
>>>>>>> 1c29009f2b373d7f4a312ecb284bb15f14d3e34d

    You can find all that on the discord website :

    [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)


<<<<<<< HEAD
 - Then authorize your bot to your discord with this link :
=======
    *Il faudra le modifier pour être redirigé sur la page de votre bot.*
>>>>>>> 1c29009f2b373d7f4a312ecb284bb15f14d3e34d

    `https://discordapp.com/oauth2/authorize?&client_id=BOT_ID&scope=bot`

    (where `BOT_ID` is replaced by your bot id)

<<<<<<< HEAD
 - Find your id by right-clicking yourself and click `copy ID` in the menu
=======
- Trouvé votre id avec un clic droit sur votre profils personnel et cliqué sur `copy ID` dans le menu. **Attention, il faudra activer le mode développeur dans les paramètres pour avoir accès à cette fonction**
>>>>>>> 1c29009f2b373d7f4a312ecb284bb15f14d3e34d

 - You must then create a config file named `config.json` like so :

    ```js
    {
      "botToken": "my.bot.token",
      "adminId": "245646465465"
    }
    ```
    (where `my.bot.token` is replaced by your bot token, and `245646465465` is your personnal discord id).

:warning: _your bot token is private, don't share it_


### Install
```shell
# clone the repo and go into the folder
git clone https://github.com/QtWiZaR/BotDiscord.git && cd botDiscord

# install the required modules (discord.js here)
npm install

# start the bot
node bot

```