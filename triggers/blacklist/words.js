/**
 * @file Sample Trigger command.
 * @author Jvson03
 */

const { MessageEmbed } = require('discord.js');

// For now, the only available property is name array. Not making the name array will result in an error.

module.exports = {
	name: [
        "nigga",
        "nigg",
        "negro",
        "pussy",
        "cunt",
        "degenerate",
        "clapped",
        "twat",
        "JasonTheWoman",
        "paki",
        "bombsquad",
        "jason is an uphill gardner"
    ],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @author Jvson03
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

        message.delete();

        const embed = new MessageEmbed()
        .setColor('67110f')
        .setTitle('Blacklist Database')
        .setDescription('Warning, that word is not allowed in this server!')
        .setTimestamp()


		message.channel.send({
			embeds: [ embed ]
		});
	},
};