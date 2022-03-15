const { MessageEmbed } = require('discord.js');
const logChannel = process.env.LOG_CH;
const roleId = process.env.AUTOROLE_ID;

module.exports = {
	name: 'guildMemberAdd',
	async execute(member)
    {
        if (member.user.bot) return;
        
        let role = member.guild.roles.cache.find(r => r.id === roleId);
        member.roles.add(role);
        console.log('[Auto-Role]: Truckers role added to the new member.')

        // This embeds purpose is to let the staff know that the auto-role has been assigned
        const logEmbed = new MessageEmbed()
        .setColor('67110f')
        .setTitle('Auto-Role Assigned')
        .addFields(
            { name: 'User', value: member.user.username.toString() + '#' + member.user.discriminator.toString() },
            { name: 'User ID', value: member.id.toString() },
            { name: 'Role:', value: '<@859433250060238879>' }
        )
        .setTimestamp()
        .setFooter(member.user.username.toString() + '#' + member.user.discriminator.toString())

		// Now we fetch the logs channel and send the embed in it
        let channel = member.guild.channels.cache.find(c => c.name === logChannel);
        if(!channel) return;
        channel.send({ embeds: [logEmbed] });
	},
};