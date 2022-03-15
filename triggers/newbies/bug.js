/**
 * @file Trigger command.
 * @author Jvson03
 */

const { MessageEmbed } = require('discord.js');

// For now, the only available property is name array. Not making the name array will result in an error.

module.exports = {
    name: [
        "How do I send a bug report?",
        "How do I send a bug report",
        "How can I send a bug report?",
        "How can I send a bug report",
        "How to send a bug report?",
        "How to send a bug report",
        "how do I send a bug report?",
        "how do I send a bug report",
        "how can I send a bug report?",
        "how can I send a bug report",
        "how to send a bug report?",
        "how to send a bug report",
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
        .setDescription('You can use $bug in the bot commands channel. The development team will take care of the rest!')
        .setTimestamp()


        message.channel.send({
            embeds: [ embed ]
        });
    },
};
