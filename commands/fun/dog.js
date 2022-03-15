const request = require('request');
const { MessageEmbed } = require('discord.js');


module.exports = {
	name: 'dog',
	description: 'Get random dog images.',
	cooldown: 2,
	execute(message) {
        const link = "https://some-random-api.ml/img/dog";

        request({url: link, json: true}, (err, res, body) => {
            let embed = new MessageEmbed()
            .setColor("67110f")
            .setImage(body.link)
            
            message.channel.send({ embeds: [embed] });
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
	},
};