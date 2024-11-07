"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "⚙️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Fred1e/RAMADHANI_MD';
  const img = 'https://i.imgur.com/hRP6xPl.jpeg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *Creepy technology*\n support our channel *by*,  https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r


╭──━━━━━━☆•∞•☆━━━━━━⊛
└│🗼 *REPOSITORY:* ${data.html_url}
┌┤🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
╰──━━━━━━☆•∞•☆━━━━━━⊛
   

  ╭─═━━⊷•∞•⊷━━━──⊛
 ┌┤❁*VISITORS:* ${repoInfo.visitors}
 ┃│❁ *STARS:* ${repoInfo.stars}
 ┃│❁ *FORKS:* ${repoInfo.forks}
 ┃│❁ *RELEASE DATE:* ${releaseDate}
 ┌┤❁ *OWNER:* *Danny_tech™*
 ┃│❁ *THEME:* *DannyI*
 ┃│❁ *ENJOY TO USE RAMADHANI MD*
 └─═━━━⊷•∞•⊷━━━──⊛
 
  ▓▒━━━⊷➻•∞•➻➳⊷━━━▒▓
   
╭  ╭❂ ⊷━━━━•∞•━━━━⊷
║  ┃ _*Made With Danny_tech™*_
╰  ╰❂ ⊷━━━━•∞•━━━━⊷ `;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
