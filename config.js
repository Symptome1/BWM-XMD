const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXY+iSBT9L/WqPfKpaNLJIiAiKCrg12YeCiiwBAGpAsWJ/32D3Z3uZDOzvTxVCurcU+ece/kFshwTZKIGjH6BosQ1pKhd0qZAYATGVRShEnRBCCkEIzCfL/usam06XhVSoyrspL4bdTWtr0jhFch5QuJPRE9idO0VPLqgqPwUB38A5IeKMV7Ft91lcN0qG2VaX3PSkf1VRxXu8drdHzswMhSBXcmv4NEiQlziLNaKIzqjEqYmapYQl9+jL+m+dvRoj6xn5clAer+Oj+tJnRwuingLU3fq97x5NWGmzDfpYygFTuemiPtqieTJWutYk9NNjUzLMidefC0K29US2bbG+Rt9guMMhUaIMopp823doTldzdHeJr0ivs3VIpjZ1TmMd8t1Oj5uJRM7Zr9ke5Wu7b9H/DowOJKtT5E138xmma7i82AgzwR0sPapeT9duKlWhKYR7pivxJflR1aS/6O7owsOifqBN1mK+4XgbDlT2e5x4saceeFu4nmoXxgpOAgT+Xv048X4dI+HHcI5p7wqnBOTXAeGvPZ6TFktJyf3IrpIn1G4DT7pQ1qVf2Jppz5pFmM5DHs09PqCYBemlGpQDreBdtJyIZmFV8iytbiT78yh40c1zppOvlb6w8tiOvWbQT2YCIeG2I1hLK/lvFio8uvzRglqjBCM2EcXlCjGhJaQ4jx77nFiF8CwdlBQIvqUFyQkWR7JKi4k/nTu2HkgXlTRdrZITpaRkPuWEXRm+s2fn4JX0AVFmQeIEBROMaF52cwRITBGBIz+/tkFGbrRN+PacjzbBREuCfWyqkhzGH64+vESBkFeZdRpskBpF6gEI+ZzG1GKs5i0OlYZLIMjrpFyhJSAUQRTgh5dEKIaB6jFA9qGjrWXlbGiWFcDky/0ncesWsrHPHv7RBD4YYDC6EXkBfgiCH34AtGQfRlCqT/oQ9GXOAZ0AX7vmfbMby089gR85wRVtOKgHLpwIcu8Ks2QRfKnDW/aoxKFYETLCnWBD4OkKtw8QdkfcMVDRZAUNzfTuHZ4aVLazUGue2zt77/gvnkKRr8+55SShy2exk5mwtLiQBecnxHE7c05ThRFju8PeGY0lP4iP66tjrAofmSItrDvmrcHQkQhTgkYAcXszUh5NTRD38UDouuyFstKLINPjz7C/hYmr16m7OaaHNiFWUXOrtfgAVZWm8oTzP69LtOZ26ymjYPbGftvEDACW3czXM57qeR4ges7Fq4ldXo7BD20zeZqP16nPpkuVf7ENrVbOwm6Lxwvr3dnqdpP1Y099EJJ4+emAGN9vdPt/dEST/FrW+0tK1+L7Q9WsWNqXzKmvSw67K29o6Mo3OmdOcc7k+MF2VS4jG+VOvF6snC6xjuttFOGDdKx5LoC1TbDfaEcblenmcG0uPoCUVdvbfgcA+n7+MXPBvn1nqwIo+c0y2Dr0H948zXjzKP7BeJ9PP4mR+ONdRfDTTDTQ9cpMybtSXklxMnET22lIoO+6HhSMpaSPJHB4/GzC4oU0igvz+3P5tkzoAtSSKj82aUuPiNC4bkAI3bAC/ywL7FcF5wbuSgcCulHcwO5fczBFDz+ATndavb4BwAA',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "tobi",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2250555236730",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

