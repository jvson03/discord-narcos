/**
 * @file Sample Select-Menu interaction
 * @author Jvson03
 */

module.exports = {
	id: "sample",

	/**
	 * @description Executes when a select menu option with ID "sample" is clicked.
	 * @author Jvson03
	 * @param {Object} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "This was a reply from select menu handler!",
		});
		return;
	},
};
