const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'church',
	description: 'Info on the servers church.',
	cooldown: 2,
	execute(message) {

        let embed = new MessageEmbed()
        .setColor("67110f")
        .setImage('https://cdn.discordapp.com/attachments/883078471084044298/937387167834067025/unknown.png')
        message.channel.send({ embeds: [embed] });
	},
};