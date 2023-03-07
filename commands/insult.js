const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("insult")
    .setDescription("insult anyone")
    .addMentionableOption((option) =>
      option
        .setName("mention")
        .setDescription("mention the user to stfu")
        .setRequired(true)
    ),
  async execute(interaction) {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function and save the result in a variable
    const data = await fetchData();
    const member = interaction.options.getMentionable("mention");
    await interaction.reply(` ${member} \n ${data.insult}`);
    // await wait(2000);
    // await interaction.deleteReply();
  },
};
