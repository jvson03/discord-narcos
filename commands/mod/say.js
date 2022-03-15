module.exports = {
	name: 'say',
	description: 'Send a message through the bot.',
	cooldown: 10,
	permissions: 'MANAGE_MESSAGES',
	guildOnly: true,
    usage: '[message]',
	execute(message, args) {
		if (!args.join(" ")) return message.channel.send("Warning! I cannot send an empty message.");
        let sayMessage = args.join(' ');
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
	},
};