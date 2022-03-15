/**
 * @file Trigger command.
 * @author Jvson03
 */

const { MessageEmbed } = require('discord.js');

// For now, the only available property is name array. Not making the name array will result in an error.

module.exports = {
    name: [
        "How do I join the server?",
        "How do I join the server",
        "How can I join the server?",
        "How can I join the server",
        "How to join the server",
        "How to join the server?",
        "how do I join the server?",
        "how do I join the server",
        "how can I join the server?",
        "how can I join the server",
        "how to join the server",
        "how to join the server?",
    ],

    /**
     * @description Executes when it is triggered by trigger handler.
     * @author Jvson03
     * @param {Object} message The Message Object of the trigger.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array
     */

    execute(message) {
        // Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

        const embed = new MessageEmbed()
        .setColor('67110f')
        .setTitle('RedBot')
        .setDescription('You cannot join yet!~')
        .setTimestamp()


        message.channel.send({
            embeds: [ embed ]
        });
    },
};
