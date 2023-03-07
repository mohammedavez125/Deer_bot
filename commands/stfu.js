const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stfu")
    .setDescription("Please Stfu 🦌")
    .addMentionableOption((option) =>
      option
        .setName("mention")
        .setDescription("mention the user to stfu")
        .setRequired(true)
    ),
  async execute(interaction) {
    const member = interaction.options.getMentionable("mention");
    await interaction.reply(` ${member} \n Stfu 🦌`);
    // await wait(2000);
    // await interaction.deleteReply();
  },
};
