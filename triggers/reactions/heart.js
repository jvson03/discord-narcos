/**
 * @file Sample Trigger command.
 * @author Jvson03
 */

// For now, the only available property is name array. Not making the name array will result in an error.

module.exports = {
	name: ["redwood", "love", "samp", "roleplay"],

	/**
	 * @description Executes when it is triggered by trigger handler.
	 * @author Jvson03
	 * @param {Object} message The Message Object of the trigger.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
	 */

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

		// message.channel.send({
		// 	content: "Set this trigger response from `./triggers/reactions/hello.js`",
		// });

		message.react('❤️');
	},
};
