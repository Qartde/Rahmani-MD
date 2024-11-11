const util = require("util");
const fs = require("fs-extra");
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "sc", categorie: "My Contact" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE).toLowerCase() === "yes" ? "public" : "private";

    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Etc/GMT");
    const temps = moment().format("HH:mm:ss");
    const date = moment().format("DD/MM/YYYY");

    let infoMsg = `
╔═══════════════════════════✦═══════════════════════════╗
              *💻 INFORMATION ABOUT ME 💻*
╚═══════════════════════════✦═══════════════════════════╝
🔗 *GITHUB LINK*: [Repository](https://github.com/Qartde)
📱 *TELEGRAM GROUP*: [CreepyTech](https://t.me/creepytech)
📩 *DEVELOPER CONTACT*: [Danny](https://t.me/Danny)
🔔 *WHATSAPP CHANNEL*: [Channel](https://whatsapp.com/channel/0029VavShWD1iUxb6kjV6K2T)
📜 *MORE INFO*: [GitHub Repository](https://github.com/Qartde/Rahmani-Md)

╔═════════════✦━━━ *System Information* ━━━✦═════════════╗
🖥️ *RAM*: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
👤 *Developer*: *𝑹𝑨𝑯𝑴𝑨𝑵𝑰*
╚═════════════════════════════════════════════════════════╝
    `;

    let menuMsg = `
╔═══════════════════════════✦═══════════════════════════╗
                  *💼 MAIN MENU 💼*
╚═══════════════════════════✦═══════════════════════════╝

       *Welcome to 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫! Explore the options below.*

╔═════════════✦━━━ *Options* ━━━✦══════════════════════╗
🔹 *Menu Option 1*: Description
🔹 *Menu Option 2*: Description
🔹 *Menu Option 3*: Description
╚═══════════════════════════════════════════════════════╝
    `;

    let lien = mybotpic();

    try {
        if (lien.match(/\.(mp4|gif)$/i)) {
            await zk.sendMessage(dest, { 
                video: { url: lien }, 
                caption: infoMsg + menuMsg, 
                footer: "I am *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*, Developed by 𝑹𝑨𝑯𝑴𝑨𝑵𝑰 Sir", 
                gifPlayback: true 
            }, { quoted: ms });
        } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
            await zk.sendMessage(dest, { 
                image: { url: lien }, 
                caption: infoMsg + menuMsg, 
                footer: "I am *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*, Developed by 𝑹𝑨𝑯𝑴𝑨𝑵𝑰 Sir" 
            }, { quoted: ms });
        } else {
            repondre(infoMsg + menuMsg);
        }
    } catch (e) {
        console.log("🥵🥵 Menu error: " + e);
        repondre("🥵🥵 Menu error: " + e);
    }
});