const { MessageEmbed } = require('discord.js');
const logChannel = process.env.LOG_CH;

module.exports = {
	name: 'messageUpdate',
	async execute(message, UpdatedMessage)
    {	
        if (message.author.bot) return;    // We ignore messages that come from other bots
        if (message.content === UpdatedMessage.content) return;
        if (!message.channel.type === 'text') return;
        if (message.content > 1000) return;
        if (message.content <= 0) return;
        if (UpdatedMessage.content >= 1000) return;
        if (UpdatedMessage.content <= 0) return;

        // We create the embed
        const logEmbed = new MessageEmbed()
            .setColor('67110f')
            .setTitle('Message Edited')
            .addFields(
                { name: 'User', value: message.author.username.toString() + '#' + message.author.discriminator.toString(), inline: true },
                { name: 'User ID', value: message.author.id.toString(), inline: true },
                { name: 'Channel', value: message.channel.toString(), inline: true },
                { name: 'Before Edit', value: message.content.toString() },
                { name: 'After Edit', value: UpdatedMessage.content.toString() }
            )
            .setTimestamp()
            .setFooter(message.author.username.toString() + '#' + message.author.discriminator.toString())
        
		// Now we fetch the logs channel and send the embed in it
        let channel = message.guild.channels.cache.find(c => c.name === logChannel);
        if(!channel) return;
        channel.send({ embeds: [logEmbed] });
	},
};