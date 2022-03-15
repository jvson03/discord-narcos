const { MessageEmbed } = require('discord.js');
const logChannel = process.env.LOG_CH;

module.exports = {
	name: 'guildMemberAdd',
	async execute(member)
    {
        if (member.user.bot) return;

        // Let's create this embed to let the staff know that someone joined
        const logEmbed = new MessageEmbed()
            .setColor('67110f')
            .setTitle('Member Joined')
            .addFields(
                { name: 'User', value: member.user.username.toString() + '#' + member.user.discriminator.toString() },
                { name: 'User ID', value: member.id.toString() }
            )
            .setTimestamp()
            .setFooter(member.user.username.toString() + '#' + member.user.discriminator.toString())

		// Now we fetch the logs channel and send the embed in it
        let channel = member.guild.channels.cache.find(c => c.name === logChannel);
        if(!channel) return;
        channel.send({ embeds: [logEmbed] });
	},
};