/**
 * @file Sample help command with slash command.
 * @author Jvson03
 */

// Deconstructed the constants we need in this file.

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription(
			"List all commands of bot or info about a specific command."
		)
		.addStringOption((option) =>
			option
				.setName("command")
				.setDescription("The specific command to see the info of.")
				.setRequired(false)
		),

	/**
	 * @description Executes when the interaction is called by interaction handler.
	 * @author Jvson03
	 * @param {*} interaction The interaction object of the command.
	 */

	async execute(interaction) {
		/**
		 * @type {Object[]}
		 * @description Array of all slash commands objects earlier registered.
		 */

		const commands = interaction.client.slashCommands;

		/**
		 * @type {Object[]}
		 * @description Help command's embed
		 */

		const helpEmbed = new MessageEmbed()
			.setColor('67110f')
			.setTitle("List of all my slash commands")
			.setDescription(
				"`" + commands.map((command) => command.data.name).join("`, `") + "`"
			);

		// Replies to the interaction!

		await interaction.reply({
			embeds: [helpEmbed],
		});
	},
};
