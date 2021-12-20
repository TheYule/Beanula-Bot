const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gaymeter",
    description: "ur gay right?",
    aliases: ["gm"],
    cooldown: 2.5,
    execute(message) {
        const member = message.mentions.members.first();
        var sus = Math.floor(Math.random() * 9999);
        var msg = "";
        bot.data.owners.forEach(owner => { if (owner == message.author.id) sus = Math.floor(Math.random() * 10); });
        if (!member) msg = message.author.username + " is " + sus + "% gay :rainbow_flag:";
        else msg = member.user.username + " is " + sus + "% gay :rainbow_flag:";
        const embed = new MessageEmbed()
        .setColor("BLURPLE")
            .setTitle("Gay Meter :rainbow_flag:")
            .setAuthor(message.client.user.username, message.client.user.avatarURL(), message.client.website)
            .setDescription(msg)
            .setFooter("Requested by " + message.author.username, message.author.avatarURL());
        message.channel.send({ embeds: [embed] });
    }
}