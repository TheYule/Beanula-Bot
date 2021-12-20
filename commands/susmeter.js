const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "susmeter",
    description: "amogus",
    aliases: ["sm"],
    cooldown: 2.5,
    execute(message) {
        const member = message.mentions.members.first();
        var sus = Math.floor(Math.random() * 9999);
        var msg = "";
        bot.data.owners.forEach(owner => { if (owner == message.author.id) sus = Math.floor(Math.random() * 10); });
        if (!member) msg = message.author.username + " is " + sus + "% sus";
        else msg = member.user.username + " is " + sus + "% sus";
        const embed = new MessageEmbed()
        .setColor("BLURPLE")
            .setTitle("Sussy Meter")
            .setAuthor(message.client.user.username, message.client.user.avatarURL(), message.client.website)
            .setDescription(msg)
            .setFooter("Requested by " + message.author.username, message.author.avatarURL());
        message.channel.send({ embeds: [embed] });
    }
}