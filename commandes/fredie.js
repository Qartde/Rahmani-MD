const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const Taphere = more.repeat(4001);

zokou({ nomCom: "problem", categorie: "My Contact" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    cm.map(async (com, index) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Dar Es Salam");

    // Créer une date et une heure en GMT
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*🔧 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 tech™ INFO 🔧*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 *Support channel* : [Follow us](https://whatsapp.com/channel/0029VavShWD1iUxb6kjV6K2T)
📱 *Join Our WhatsApp group* : (https://chat.whatsapp.com/CLBBh4T0KVi3wlzqcXqTdb)
👨‍💻 *WhatsApp Contact As* : [Contact Me](Https://wa.me/255693629079)
📁 *WhatsApp Bot Fork And Star* : [GitHub Link](https://github.com/Qartde/Rahmani-Md)

📱 *Telegram Channel* : [Join Channel](https://t.me/creepytwchnology)
🧑‍💻 *Telegram Contact As* : [𝑹𝑨𝑯𝑴𝑨𝑵𝑰](t.me/Danny)
📸 *Instagram* : [Follow Instagram](https://www.instagram.com/Mrblender5)
📺 *YouTube Channel Subscribe* : [Subscribe Now](https://www.youtube.com/@creepy_technology)
🔗 *Follow My GitHub* : [GitHub](https://github.com/Qartde/Rahmani-Md)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕰️ *TIME*: ${temps}
📅 *DATE*: ${date}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    let menuMsg = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✦✧✦✧ *𝑹𝑨𝑯𝑴𝑨𝑵𝑰 tech™ MENU* ✦✧✦✧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☀️ Welcome to *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫™ Support Menu*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 *What can I help you with?*
- ⬛ *Problem-Solving*
- ⬛ *Custom Development*
- ⬛ *Bot Assistance*
- ⬛ *Feature Requests*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 *For More Help:*
- [Click here to explore](https://wa.me/255693629079)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
> ✨ *Thanks for your support!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    var lien = mybotpic();

    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            zk.sendMessage(dest, { 
                video: { url: lien }, 
                caption: infoMsg + menuMsg, 
                footer: "*Developed by 𝑹𝑨𝑯𝑴𝑨𝑵𝑰, using 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*" , 
                gifPlayback: true 
            }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu error: " + e);
            repondre("🥵🥵 Menu error: " + e);
        }
    }
    // Vérification pour .jpeg ou .png
    else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            zk.sendMessage(dest, { 
                image: { url: lien }, 
                caption: infoMsg + menuMsg, 
                footer: "*Developed by 𝑹𝑨𝑯𝑴𝑨𝑵𝑰, using 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*" 
            }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu error: " + e);
            repondre("🥵🥵 Menu error: " + e);
        }
    }
    else {
        repondre(infoMsg + menuMsg);
    }

});