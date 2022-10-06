const { MessageEmbed } = require('discord.js');
const monColor = {
  black: '#000000',
  blue: 'BLUE',
  brown: '#823200',
  gray: 'GREY',
  green: 'GREEN',
  pink: 'LUMINOUS_VIVID_PINK',
  purple: 'PURPLE',
  red: 'RED',
  white: 'WHITE',
  yellow: 'YELLOW'
}
const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = {
  name: 'random',
  description: 'Get a random pokemon',
  usage: 'random [magic spell]',
  aliases: ['rand'],
  async run({ msg, args, P }) {
    let mons = require('../newDex.json');

    const shit = args.join(' ');
    var flag = null;
    if (shit.includes('--rares')) flag = 'rares';
    if (shit.includes('--commons')) flag = 'comms'
    if (flag === 'rares') mons = mons.filter(m => m.leg === true || m.myt === true);
    else if (flag === 'comms') mons = mons.filter(m => m.leg === false && m.myt === false)
    else mons = mons
    const random = Math.floor(Math.random() * mons.length);
    const randomMon = mons[random];
    try {
      const imageName = randomMon.name[0].toLowerCase().replace(/[\s&\/\\#,+()$~%.'":*?<>{}-]/g, '');
      const imageURL = `https://play.pokemonshowdown.com/sprites/ani/${imageName}.gif`
      const embed = new MessageEmbed()
        .setColor(monColor[randomMon.color])
        .setFooter({ text: 'please see r!pollinfo' })
        .setTitle(capitalise(randomMon.name[0]))
        .setImage(imageURL);
      return msg.reply({
        embeds: [embed]
      })
    } catch (err) {
      console.log(err.stack);
      return msg.reply(`oops. Try again later :sleepy:. Error code: \`${random}\``);
    }
  }
}