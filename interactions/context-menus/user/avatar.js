/**
 * @file Sample Use Context Menu interaction
 */

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: {
		name: "Avatar",
		type: 2, // 2 is for user context menus
	},

	/**
	 * @description Executes when the context option with name "avatar" is clicked.
	 * @param {Object} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {

		const row = new MessageActionRow().addComponents(new MessageButton().setStyle('LINK').setURL(interaction.options.getUser('user').displayAvatarURL({ dynamic: true, size: 4096 })).setLabel("Show"))
        interaction.reply({ content: `${interaction.options.getUser('user').displayAvatarURL({ dynamic: true, size: 4096 })}`, components: [row] });

		return;
	},
};
