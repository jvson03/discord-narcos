const { MessageEmbed } = require('discord.js');
const suggestChannel = process.env.SUGGEST_CH;

const emojis = ["👍", "👎"];

module.exports = {
    name: 'suggest',
    description: 'Send a suggestion through the bot!',
    cooldown: 20,
    guildOnly: true,
    execute(message, args) {
        if (!args.join(" ")) 
            return message.channel.send("Warning! I cannot send an empty suggestion.");
        
        let suggestion = args.join(' ');
        
        let embed = new MessageEmbed()
            .setTitle("New Suggestion")
            .setThumbnail('https://media.discordapp.net/attachments/927856084625010718/927856270176837672/REDWOOD_RESTRICTED_V2.png?width=493&height=493')
            .setColor('67110f')
            .setDescription('Suggestion: \n' + suggestion)
            .addFields(
                { name: 'Author:', value: message.author.toString() }
            )
            .setTimestamp(new Date())
            
        // message.delete().catch(O_o=>{}); // gives an error fuck this shit
        let suggestionChannel = message.guild.channels.cache.find(c => c.name === suggestChannel);
        if(!suggestionChannel) return;
        
        suggestionChannel.send({ embeds: [embed] }).then(async msg => {
        await msg.react(emojis[0]);
        await msg.react(emojis[1]);
        });
        
        message.reply("A poll has been started for your suggestion. Check `#suggestions.`");
    }
}