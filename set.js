const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUbY+qOBj9L/2qcwFRQZNJFhAVAUXxfXOzKVCg8mopKE787xt0JjOb7L07y6empec5Pec8zxtIM1wgHdVg+AZygitIUbOkdY7AEMil7yMC2sCDFIIhWBgkvhlLG/IqPLurgTGSrVPLPNWpJW9PwdEPr5N5HPYvqfYK7m2Ql06M3d8Azgx+OuVHPbwp6NXyuX1wPZWaR/LaNCdWS++t+oqds9fxWnwF9wYRYoLTQM1DlCACYx3VFsTke/Qni1bBh9ORJXO95MawCTfSqhnjLM+3sR2Hp/Fkrx9JhW+74Hv0p4rtWVNfVMOxdYkkers5BqJHy5xH3LUYxSHUt7Ytmm4UPekXOEiRp3kopZjW39a9s1jDXQyhrPBq7E2ufkJd/VCrBrOqlMPg6Fx2ztJTjuzk8D3i5jXyPd1x1cPutJf9/Dpz5TkkZbGtzQ02W0nMBf6sszJr9itxi3xkJfo/uu9m49Yslmt2YgVdnvgzkgl+FTlGjqlJk6sN7ZCfrevB7puxKfixtY+0BkbdHNO+uVeg6nGiKXiuWAh1VacDc51Fq87mkz6kJfkdy94mmkZiMHNPIU2O6CDYxzPfirfWRXaUZXZa9/d1GTtT17ATZlBW8TYtFGZ5Fmx22pnqrKxsNaqH2wxfM39cO3v3YEnB6+NFEao1Dwy5exsQFOCCEkhxlj72BnwbQK+ykUsQfcgLWqYyVcyw6PNLm4ScpUqnS5iGQaa40fhQoR2ahXhJV9J18wraICeZi4oCeVNc0IzUJioKGKACDP/82QYputKncU05nmsDH5OCbtIyjzPofbj6cQhdNytTatepqzQLRMCQ/dxGlOI0KBodyxQSN8QVUkJICzD0YVygext4qMIuavCAJLpbt7Sh/Rc6JBr20S1zlpeGcpilz1+g0BO6Lote+pzIvnR7gv/iOD58EZ0BEsWB6zsdAbQBfu+Z5s4vLWQ8vZTJus+f1HO5QXIUivE27LnhKHrY8NQeEeSBISUlagMHulGZr7MIpb/BbTGOysh9ySfydHy5eMJhjt3U7hzP4hfcp6dg+PY5p5TMa/BGx65hTbocaIPkEUHcvLzDdwdsj2NFVux0h90/ih+XRkiY5z9SRBvcd9GbGx6iEMcFGAJFv8GWe5DVWWV2DXYykbRAUgIJfJr0kfZnmpheVDIlTc5MUTOX4NBDI8aX50UXV66VX8tiZzuz3TKML9nrv4CAIajMnuK0Nl5cqK3I3m2qoDfJOjDVQyEarfqBHNyYoJr2VH0gTVgLXbbHebyKB34vn81XGmVuu/g4X+tYu7HayTQMRe5I0mtT7RmWfxa7qVoYqMso0cNbt3bxWjgp8+luuQiWVv8mnhhJYIXWaWXp8Ug5FJK67QxswdiG03nZj+aELrJ03V+txVlXkUnLiA3l8uzDxxyI3+cvfnTI23u0fIwe4yyFjUX/Zc7XlLP39heM9wH5iyTJfutoVAI5nivBrERtstgHDH9ZOwuN8KO+65BxlNTbSDu6Orjff7ZBHkPqZyRpWiX1SIY90AYxLKj02ahrnKCCwiQHQ07oslyH63d7bZDUUp7bFNKP/gZS85k+A+5/A3drVqr7BwAA',
    PREFIXE: process.env.PREFIX || "_",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "𝐀𝐋𝐋𝐈𝐒𝐎𝐍",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349051080824",  
    CHATBOT : process.env.CHATBOT || "yes",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I'm not HIM",
   GREET_MSG: process.env.GREET_MSG || "My owner is unavailable, fuvk off, thanks 🥺",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'yes', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'yes',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined automatically by Alpha_md. LEAVE MY OWNER OR GET BLOCKED',             
    GURL: process.env.GURL  || "https://wa.me/2349051080824",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Lagos", 
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
