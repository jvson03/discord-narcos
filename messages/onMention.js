/**
 * @file Default Bot Mention Command
 * @author Jvson03
 */

const prefix = process.env.PREFIX;

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Jvson03
	 * @param {Object} message The Message Object of the command.
	 */

	async execute(message) {
		return message.channel.send(
			`Hi ${message.author}! My prefix is \`${prefix}\`, get help by \`${prefix}help\``
		);
	},
};
