const { MessageEmbed } = require('discord.js');
const bugChannel = process.env.BUG_CH;

module.exports = {
    name: 'bug',
    description: 'Send a bug report through the bot!',
    cooldown: 20,
    guildOnly: true,
    execute(message, args) {
        if (!args.join(" ")) 
            return message.channel.send("Warning! I cannot send an empty bug.");
        
        let bug = args.join(' ');
        
        let embed = new MessageEmbed()
            .setTitle("New Bug Report")
            .setThumbnail('https://media.discordapp.net/attachments/927856084625010718/927856270176837672/REDWOOD_RESTRICTED_V2.png?width=493&height=493')
            .setColor('67110f')
            .setDescription('Bug: \n' + bug)
            .addFields(
                { name: 'Author:', value: message.author.toString() }
            )
            .setTimestamp(new Date())
            
        // message.delete().catch(O_o=>{}); // gives an error fuck this shit
        let bugsChannel = message.guild.channels.cache.find(c => c.name === bugChannel);
        if(!bugsChannel) return;
        
        bugsChannel.send({ embeds: [embed] });
        
        message.reply("The bug has been reported, an admin will react (👍) once it has been solved. Check `#bugs.`");
    }
}