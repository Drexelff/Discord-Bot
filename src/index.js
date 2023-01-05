const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { cargarEventos } = require("./spec/event");

client.config = require("./config/config.json");
client.events = new Collection();
client.commands = new Collection();

cargarEventos(client);

client.login(client.config.token);