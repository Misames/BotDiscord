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

- Maintenant vous devez créer un fichier `config.js` dans le dossier `src` qui contiendra :

    ```js
    module.exports = {
       token: '135488484.hgf4h2gf4q54df.dsf45sf',
    }
    ```

    (Le `my.bot.token` sera remplacer par votre bot token.

:warning: _Votre bot token doit être privé ! Ne le partagé pas !_

### Install

```shell
# cloné le dossier puis allez dedans
git clone https://github.com/Misames/BotDiscord.git && cd botDiscord

# installé les modules
npm install

# démaré le bot
node bot
```
