async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 EMPEROR XMD*

*📂 GitHub Repository:*
https://github.com/sesco001/EMPEROR XMD

*📢 MAIN CHANNEL:*
https://whatsapp.com/channel/0029Vb61ODcIN9ihyL3QOI1h

_STAR💥 AND FORK THE REPO IF U LIKE💋 EMPEROR-XMD BOT!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418628641913@newsletter',
                    newsletterName: 'EMPEROR-XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
