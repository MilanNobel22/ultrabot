require("dotenv").config();

const express = require("express");
const fs = require("fs");
const BotClient = require("./structures/Client");

// -------------------- WEB SERVER (UptimeRobot) --------------------
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is alive");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Webserver draait");
});

// -------------------- DISCORD BOT --------------------
const client = new BotClient(process.env.TOKEN);

client.login(process.env.TOKEN);

// -------------------- HANDLERS --------------------
["commands", "events", "addons"].forEach(handler => {
  require(`./handlers/${handler}`).init(client);
});
