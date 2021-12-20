const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    description: "Help biba",
    aliases: ["?"],
    cooldown: 2.5,
    execute(message) {
        const client = message.client;
        const { commands } = client;
        const body = [];
        commands.map(command => {
            body.push("```" + command.name + " — " + (command.description || "no description") + "```")
        })
        const embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Help")
            .setAuthor(client.user.username, client.user.avatarURL(), client.website)
            .setDescription(body.join(""))
            .setFooter("Requested by " + message.author.username, message.author.avatarURL());
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=904474557627379763&permissions=8&scope=applications.commands%20bot"),
                new MessageButton()
                    .setLabel("Website")
                    .setStyle("LINK")
                    .setURL(client.website)
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}