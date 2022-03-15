const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Send an embed through the bot.',
	cooldown: 10,
	permissions: 'MANAGE_MESSAGES',
	guildOnly: true,
    usage: '[message]',
	execute(message, args) {
		if (!args.join(" ")) return message.channel.send("Warning! I cannot send an empty message.");
        let sayMessage = args.join(' ');
        message.delete().catch(O_o=>{});

        const embed = new MessageEmbed()
            .setColor('67110f')
            .setThumbnail('https://media.discordapp.net/attachments/927856084625010718/927856270176837672/REDWOOD_RESTRICTED_V2.png?width=493&height=493')
            .setTitle('RedBot')
            .setDescription(sayMessage)
            .setTimestamp()
            // .setFooter('')

        message.channel.send({ embeds: [embed] });
	},
};