# Bot

Simple bot qui renvoie des réponses, si on la question avec des commandes.
Fait avec : [nodejs](https://nodejs.org/en/) et [discordjs](https://discord.js.org/#/) librairie.

## Setup

- Vous aurez besoin de `git` et `nodejs` sur votre PC.
- Créer un bot `user bot`.
    Il aura un `bot ID` et `bot token`.

    Vous pouvez retrouver ces informations sur :

    [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)

- Puis donner lui les autorisations que vous voulez de votre serveur avec ce lien :

    *Il faudra le modifier pour être rediriger sur la page de votre bot.*

    `https://discordapp.com/oauth2/authorize?&client_id=BOT_ID&scope=bot`

    (quand le `BOT_ID` sera remplacer par votre bot id)

- Trouvé votre id avec un clic droit sur votre profils personnel et cliqué sur `copy ID` dans le menu. **Attention il faudra activé le mode développeur dans les paramètres pour avoir accès à cette fonction**

- Maintenant vous devez créer un fichier `config.json` qui contiendra :

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
git clone https://github.com/Misames/BotDiscord.git && cd botDiscord

# install the required modules (discord.js here)
npm install discord.js

# start the bot
node bot
```
