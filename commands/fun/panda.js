const request = require('request');
const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'panda',
	description: 'Get random panda images.',
	cooldown: 2,
	execute(message) {
        const link = "https://some-random-api.ml/img/cat";

        request({url: link, json: true}, (err, res, body) => {
            let embed = new MessageEmbed()
            .setColor("67110f")
            .setImage(body.link)
            
            message.channel.send({ embeds: [embed] });
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
	},
};