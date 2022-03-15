/**
 * @file Sample button interaction
 * @author Jvson03
 */

module.exports = {
	id: "sample",

	/**
	 * @description Executes when the button with ID "sample" is clicked.
	 * @author Jvson03
	 * @param {Object} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "This was a reply from button handler!",
		});
		return;
	},
};