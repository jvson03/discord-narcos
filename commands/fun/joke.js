/**
 * @file Joke command
 */

const oneLinerJoke = require('one-liner-joke');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "joke",
	description: 'Sends a random joke.',

	execute(message) {
        var getRandomJoke = oneLinerJoke.getRandomJoke();

        const embed = new MessageEmbed()
        .setColor("67110f")
        .setDescription(getRandomJoke.body)

        message.channel.send({ embeds: [embed] });
	},
};
