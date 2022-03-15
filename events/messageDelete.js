const { MessageEmbed } = require('discord.js');
const logChannel = process.env.LOG_CH;

module.exports = {
	name: 'messageDelete',
	execute(message)
    {
        if (message.author.bot) return;	  // We ignore messages that come from other bots
        if (message.channel.type === 'dm') return;    // We ignore messages in the bot DM's
        if (message.content >= 1000) return;
        if (message.content <= 0) return;

		// Lets create the embed
        const logEmbed = new MessageEmbed()
            .setColor('67110f')
            .setTitle('Message Deleted')
            .addFields(
                { name: 'User', value: message.author.username.toString() + '#' + message.author.discriminator.toString(), inline: true },
                { name: 'User ID', value: message.author.id.toString(), inline: true },
                { name: 'Channel', value: message.channel.toString(), inline: true },
                { name: 'Message', value: message.cleanContent.toString(), inline: true }
            )
            .setTimestamp()
            .setFooter(message.author.username + '#' + message.author.discriminator)
		
		// Now we fetch the logs channel and send the embed in it
        let channel = message.guild.channels.cache.find(c => c.name === logChannel);
        if(!channel) return;
        channel.send({ embeds: [logEmbed] });
	},
};