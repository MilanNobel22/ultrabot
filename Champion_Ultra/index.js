require("dotenv").config();

const fs = require("fs");
const BotClient = require("./structures/Client");

const client = new BotClient(process.env.TOKEN);

client.login(process.env.TOKEN);

["commands", "events", "addons"].forEach(handler => {
  require(`./handlers/${handler}`).init(client);
});
