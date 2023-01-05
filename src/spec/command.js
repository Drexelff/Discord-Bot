async function cargarComandos(client) {
    const { recargar } = require("../util/loader");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Comandos", "Estado");
  
    await client.commands.clear();
  
    let commandsArray = [];
  
    const Files = await recargar("Commands");
  
    Files.forEach((file) => {
      const command = require(file);
      client.commands.set(command.data.name, command);
  
      commandsArray.push(command.data.toJSON());
  
      table.addRow(command.data.name, "🟩");
    });
  
    client.application.commands.set(commandsArray);
  
    return console.log(table.toString(), "\nComandos Cargados.".magenta);
  }
  
  module.exports = { cargarComandos };
  