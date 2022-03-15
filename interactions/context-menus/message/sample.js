/**
 * @file Sample Message Context Menu interaction
 * @author Jvson03
 */

module.exports = {
	data: {
		name: "test",
		type: 3, // 3 is for message context menus
	},

	/**
	 * @description Executes when the context option with name "sample" is clicked.
	 * @author Jvson03
	 * @param {Object} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "I am a sample message context menu.",
		});
		return;
	},
};
