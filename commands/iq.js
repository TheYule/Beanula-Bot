const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",
    description: "Are u smort?",
    aliases: [":brain:"],
    cooldown: 2.5,
    execute(message) {
        const member = message.mentions.members.first();
        var iq = Math.floor(Math.random() * 300);
        var msg = "";
        bot.data.owners.forEach(owner => { if (owner == message.author.id) iq = "∞"; });
        if (!member) msg = message.author.username + "'s IQ is " + iq;
        else msg = member.user.username + "`s IQ is " + iq;
        const embed = new MessageEmbed()
        .setColor("BLURPLE")
            .setTitle("IQ :brain:")
            .setAuthor(message.client.user.username, message.client.user.avatarURL(), message.client.website)
            .setDescription(msg)
            .setFooter("Requested by " + message.author.username, message.author.avatarURL());
        message.channel.send({ embeds: [embed] });
    }
}