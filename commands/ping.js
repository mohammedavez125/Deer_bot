const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong 1!");
    await interaction.followUp("Pong 2!");
    // await interaction.deferReply({ ephemeral: true });
    // await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
    await wait(2000);
    await interaction.editReply("Pong again!");
  },
};
