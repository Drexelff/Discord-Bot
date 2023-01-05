const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: ":x: : **El comando esta desactualizado.**",
        ephermal: true,
      });

    if (command.developer && interaction.user.id !== "664603483021770764")
      return interaction.reply({
        content: ":x: : **El comando es solo para desarolladores.**",
        ephermal: true,
      });

    command.execute(interaction, client);
  },
};
