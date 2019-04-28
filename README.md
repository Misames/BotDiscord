# bot

simple bot qui renvoie des réponse si on le question avec des commandes
fait avec : [nodejs](https://nodejs.org/en/) et [discordjs](https://discord.js.org/#/) library.

## Setup

- Vous aurez besoin de `git` et `nodejs` sur votre PC
- céer un bot `user bot`
    Il aura un `bot ID` et `bot token`.

    Vous pouvez retrouver ces information sur :

    [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)

- Puis donner lui les authorisation que vous voulez sur votre serveur avec ce lien :

    *il faudra le modifier pour etre rediriger sur la page de votre bot*

    `https://discordapp.com/oauth2/authorize?&client_id=BOT_ID&scope=bot`

    (quand le `BOT_ID` sera remplacer par votre bot id)

- trouvé votre id avec un clic droit sur votre profils personnele et cliec sur `copy ID` dans le menu **Attention il faudra activité le mode developpeur dans les paramètres pour avoir accé a cette fonction**

- Maintenant vous devez crée un fichier `config.json` qui contiendra :

    ```js
    {
      "botToken": "my.bot.token",
      "adminId": "245646465465"
    }
    ```

    (Le `my.bot.token` sera remplacer par votre bot token et `245646465465` est votre id de votre compte perso.

:warning: _Votre bot token doit être privé ! Ne le partagé pas !_

### Install

```shell
# clone the repo and go into the folder
git clone https://github.com/WiZaROnTheWeb/BotDiscord.git && cd hello-bot

# install the required modules (discord.js here)
npm install discord.js

# start the bot
node bot
```