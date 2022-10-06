module.exports = {
    name: 'vote',
    description: 'Seggsy command :)',
    usage: 'vote',
    run({msg}) {
        return msg.reply(`https://top.gg/bot/${msg.client.user.id}/vote`);
    }
}