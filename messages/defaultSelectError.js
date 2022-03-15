/**
 * @file Default Error Message On Error Select Menu Interaction
 * @author Jvson03
 */

module.exports = {
	/**
	 * @description Executes when the select menu interaction could not be fetched.
	 * @author Jvson03
	 * @param {Object} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "There was an issue while fetching this select menu option!",
			ephemeral: true,
		});
		return;
	},
};
