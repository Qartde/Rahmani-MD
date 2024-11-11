const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu3", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault(s.TZ);

    // Create time and date
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭━━━━━━⛓══❂══⛓━━━━━━╮
┃ 🔥 *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫* 🔥
┃ 💥 *Mode*: ${mode} 💥
┃ 👑 *Owner*: ${s.OWNER_NAME} 👑
┃ 📚 *Library*: Baileys 📚
┃ 🎮 *Prefix*: ${s.PREFIXE} 🎮
┃ 📅 *Date*: ${date} 📅
┃ ⏰ *Time*: ${temps} ⏰
┃ ⚙️ *Tools*: ${cm.length} ⚙️
┃ 💻 *RAM*: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())} 💻
┃ 🌍 *Host*: ${os.platform()} 🌍
╰━━━━━━⛓══❂══⛓━━━━━━╯
`;

    let menuMsg = `
┏━━━━━━━━━━━━━━━━━━━┛
┃ 🌟 _*COMMANDS*_
┗━━━━━━━━━━━━━━━━━━━┛

`;

    // Add categories and commands to the menu
    for (const cat in coms) {
        menuMsg += `╭━⛓━━━✪ _*${cat}*_ ✪━━━⛓━⊷`;

        for (const cmd of coms[cat]) {
            menuMsg += `
┃ ✦ ${cmd}`;
        }

        menuMsg += `
╰━⛓━━━━━━⛓━━━━⛿\n`;
    }

    // Additional decoration
    menuMsg += `
╭━━━⛓━━━━⛓━━━━━━━┓
┃ 🌟 _*𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 2024*_
┃ 🎉 _*Enjoy Life to the Fullest!*_ 
╰━⛓━━━━⛓━━━━━━━┛
╭━━━━⛓━━━━⛓⛓⛓┓
┃ 🌟 _*𝑝𝑜𝑤𝑒𝑟𝑒𝑑𖣘𝑅𝑎ℎ𝑚𝑎𝑛𝑖𖣘*_
╰━━━━⛓━━━━⛓━━━━━┛
`;

    var lien = mybotpic();

    // If the bot's pic is a video or gif
    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            zk.sendMessage(dest, { video: { url: lien }, caption: infoMsg + menuMsg, footer: "I'm *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*, developer 𝑹𝑨𝑯𝑴𝑨𝑵𝑰", gifPlayback: true }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu error " + e);
            repondre("🥵🥵 Menu error " + e);
        }
    }
    // If the bot's pic is an image
    else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            zk.sendMessage(dest, { image: { url: lien }, caption: infoMsg + menuMsg, footer: "I'm *𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫*, developer 𝑹𝑨𝑯𝑴𝑨𝑵𝑰" }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu error " + e);
            repondre("🥵🥵 Menu error " + e);
        }
    } else {
        repondre(infoMsg + menuMsg);
    }
});