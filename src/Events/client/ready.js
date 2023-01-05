const { cargarComandos } = require("../../spec/command");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("El cliente se ha conectado a Discord.".green);

    cargarComandos(client);
  },
};