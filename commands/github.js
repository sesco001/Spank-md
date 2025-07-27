async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 SPANK XMD*

*📂 GitHub Repository:*
https://github.com/sesco001/Makamesco_md

*📢 MAIN CHANNEL:*
https://whatsapp.com/channel/0029VbAEL9r5vKA7RCdnYG0S

_STAR💥 AND FORK THE REPO IF U LIKE💋 SEXY-XMD BOT!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418628641913@newsletter',
                    newsletterName: 'SEXY-XMD',
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
