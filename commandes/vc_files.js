const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'vcf5',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📂', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


zokou({ nomCom: 'getallmembers',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤲', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);



zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🔗', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*Support Here My Owner By Follow This Channel Please* :https://whatsapp.com/channel/0029VavShWD1iUxb6kjV6K2T`) 

   


  }
);


zokou({ nomCom: 'luckytgc',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🤭', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*Tap Here To Join Creepy technology Telegram Chatroom* https://t.me/creepytwchnology`) 

   


  }
);


zokou({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⏰️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 is running on its latest vision_*`) 

   


  }
);


zokou({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 v1_*`) 

   


  }
);


  
zokou({ nomCom: 'luckywagc',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🛰', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*Tap To Join 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 WhatsApp Chartroom Group* https://chat.whatsapp.com/CLBBh4T0KVi3wlzqcXqTdb`) 

   


  }
)


zokou({ nomCom: 'hack2',
    desc: 'To check runtime',
    Categorie: 'My Contact',
    reaction: '🏃', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`Injecting Malware",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "System hijacking on process..\nConnecting to Server error to find 404",
    "Device successfully connected...\nReceiving data...",
    "Data hijacked from device 100% completed\nKilling all evidence, killing all malwares...",
    "HACKING COMPLETED",
    "SENDING LOG DOCUMENTS...",
    "SUCCESSFULLY SENT DATA AND Connection disconnected",
    "BACKLOGS CLEARED",
    "POWERED BY 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫",
    "By 𝑹𝑨𝑯𝑴𝑨𝑵𝑰™`) 

   


  }
)
