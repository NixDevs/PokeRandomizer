const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'report',
  description: 'Report a bug',
  usage: 'report',
  run({ msg, args }) {
    if (args.length < 2) return msg.reply('Be more descriptive');
    else {
      const channel = msg.client.channels.cache.get('977049544992915456');
      channel.send({
        embeds: [
          new MessageEmbed()
            .setTitle(`A report from ${msg.author.tag}`)
            .setDescription(args.join(' '))
            .setColor('#e3e3e3')
        ]
      });
      return msg.channel.send('Done.')
    }
  }
}