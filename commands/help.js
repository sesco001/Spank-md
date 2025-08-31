const settings = require("../settings");
const fs = require('fs');
const path = require("path");
async function helpCommand(_0x3cea4c, _0x5a5e69, _0x4078e7) {
  const _0x492d51 = "\n\n╭───────────────────❂\n┃✰╭──────────────• \n┃✰│🧛🏼‍♀️ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : *[ panel ]*\n┃✰│🧛🏼‍♀️ 𝗣𝗿𝗲𝗳𝗶𝘅 : *[ . ]*\n┃✰│🧛🏼‍♀️ 𝗠𝗼𝗱𝗲 : *[ public ]*\n┃✰│🧛🏼‍♀️ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : *" + (settings.botName || "SPANK-XMD") + "* \n┃✰│🧛🏼‍♀️ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : *" + (settings.version || "1.0.0") + "*\n┃✰│🧛🏼‍♀️ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : " + (settings.botOwner || "MAKAMESCO") + "\n┃✰│🧛🏼‍♀️ 𝗬𝗧 : " + global.ytch + "\n┃✰╰──────────────•\n╰───────────────────❂\n\n* BOT MENU💣:*\n\n╭━〔 *🌹 GENERAL MENU 🌹* 〕━⊷\n┃🌸╭──────────────·๏\n┃🌸│ .help\n┃🌸│ .menu\n┃🌸│ .alive\n┃🌸│ .tts\n┃🌸│ .owner\n┃🌸│ .joke\n┃🌸│ .quote\n┃🌸│ .fact\n┃🌸│ .weather\n┃🌸│ .newsletterJid\n┃🌸│ .attp\n┃🌸│ .lyrics\n┃🌸│ .8ball\n┃🌸│ .goupinfo\n┃🌸│ .staff\n┃🌸│ .admins\n┃🌸│ .vv\n┃🌸│ .pair\n┃🌸│ .rent\n┃🌸╰────────────┈⊷\n╰──────────────────┈⊷ \n\n╭━━〔 *🐦‍🔥 ADMIN MENU 🐦‍🔥* 〕━━┈⊷\n┃🌿╭──────────────·๏\n┃🌿│ .ban\n┃🌿│ .promote\n┃🌿│ .demote\n┃🌿│ .mute\n┃🌿│ .unmute\n┃🌿│ .delete\n┃🌿│ .del\n┃🌿│ .kick\n┃🌿│ .warnings\n┃🌿│ .warnings\n┃🌿│ .antilink \n┃🌿│ .antibadword\n┃🌿│ .clear\n┃🌿│ .Tag\n┃🌿│ .tagall\n┃🌿│ .chatbot\n┃🌿│ .resetlink\n┃🌿╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━━〔 *🛰️ OWNER MENU 🛰️* 〕━━┈⊷\n┃🇰🇪╭──────────────·๏\n┃🪔│ .mode\n┃🇰🇪│ .autostatus\n┃🪔│ .clearsession\n┃🇰🇪│ .antidelete\n┃🪔│ .cleartmp\n┃🇰🇪│ .setpp\n┃🪔╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━〔 *🌌IMAGE MENU 🌌*〕━┈⊷\n┃🇲🇨╭──────────────·๏\n┃⚖️│ .blur\n┃🇲🇨│ .simage\n┃⚖️│ .sticker\n┃🇲🇨│ .tgsticker\n┃⚖️│ .meme\n┃🇲🇨│ .take\n┃⚖️│ .emojimix\n┃🇲🇨╰────────────┈⊷\n╰──────────────────┈⊷ \n\n╭━━〔 *🎮GAME MENU 🎮* 〕━━┈⊷\n┃🎭╭──────────────·๏\n┃🇮🇳│ .tictactoe\n┃🎭│ .hangman\n┃🇮🇳│ .guess\n┃🎭│ .trivia\n┃🇮🇳│ .answer\n┃🎭│ .truth\n┃🇮🇳│ .dare\n┃🎭╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━━〔 *🤖AI MENU 🤖* 〕━━┈⊷\n┃🪫╭──────────────·๏\n┃🪫│ .gpt\n┃🪫│ .gemini\n┃🪫╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━━〔 *😃FUN MENU 😃* 〕━━┈⊷\n┃🇭🇹╭──────────────·๏\n┃⚖️│ .compliment\n┃🇭🇹│ .insult\n┃⚖️│ .flirt\n┃🇭🇹│ .character\n┃⚖️│ .wasted\n┃🇭🇹│ .ship\n┃⚖️│ .simp\n┃🇭🇹│ .stupid\n┃⚖️╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━〔 *✍️TEXT MAKER MENU ✍️* 〕━┈⊷\n┃👩‍💻╭──────────────·๏\n┃🧝‍♂️│ .metallic\n┃👩‍💻│ .ice\n┃🧝‍♂️│ .snow\n┃👩‍💻│ .impressive\n┃🧝‍♂️│ .matrix \n┃👩‍💻│ .light\n┃🧝‍♂️│ .neon\n┃👩‍💻│ .devil\n┃🧝‍♂️│. Purple\n┃👩‍💻│ .thunder\n┃🧝‍♂️│ .leaves\n┃👩‍💻│ .1917\n┃🧝‍♂️│ .arena\n┃👩‍💻│ .hacker\n┃🧝‍♂️│ .sand\n┃👩‍💻│ .blackpink\n┃🧝‍♂️│ .glitch\n┃👩‍💻│ .fire\n┃🧝‍♂️╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━〔 *🔊DOWNLOADER MENU 🔊*〕━┈⊷\n┃⏳╭──────────────·๏\n┃⏳│ .play\n┃⏳│ .song\n┃⏳│ .instagram\n┃⏳│ .facebook\n┃⏳│ .tiktok\n┃⏳╰────────────┈⊷\n╰──────────────────┈⊷\n\n╭━〔 *🔱 GITHUB MENU🔱* 〕━┈⊷\n┃🌀╭──────────────·๏\n┃🌀│ .git\n┃🌀│ .github \n┃🌀│ .sc\n┃🌀│ .script\n┃🌀│ .repo\n┃🌀╰────────────┈⊷\n╰──────────────────┈⊷\n\n𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀🧝MAKAMESCODEV𝑨🧝:\n\nPOWERED BY 🧝‍♂️MAKAMESCO 𝐃𝐞𝐯🧝‍♂️ 🌍:";
  try {
    const _0x539197 = path.join(__dirname, "../assets/bot_image.jpg");
    if (fs.existsSync(_0x539197)) {
      const _0x1f7b21 = fs.readFileSync(_0x539197);
      await _0x3cea4c.sendMessage(_0x5a5e69, {
        'image': _0x1f7b21,
        'caption': _0x492d51,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363418628641913@newsletter",
            'newsletterName': "SPANK-XMD",
            'serverMessageId': -1
          }
        }
      });
    } else {
      console.error("Bot image not found at:", _0x539197);
      await _0x3cea4c.sendMessage(_0x5a5e69, {
        'text': _0x492d51,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363418628641913@newsletter",
            'newsletterName': "Spank-MD",
            'serverMessageId': -1
          }
        }
      });
    }
  } catch (_0x94da2e) {
    console.error("Error in help command:", _0x94da2e);
    await _0x3cea4c.sendMessage(_0x5a5e69, {
      'text': _0x492d51
    });
  }
}
module.exports = helpCommand;
