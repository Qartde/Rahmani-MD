const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"☔"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or 𝑹𝑨𝑯𝑴𝑨𝑵𝑰");
  }

  const {exec}=require("child_process")

    repondre("𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 Restarting ⏳");

  exec("pm2 restart all");
  

  



})
