require("dotenv").config();
const fetch = require("node-fetch"); // fetch をインポート

const appID = process.env.APP_ID;
const guildID = process.env.GUILD_ID;
const botToken = process.env.BOT_TOKEN;

const apiEndpoint = 
  `https://discord.com/api/v8/applications/${appID}/guilds/${guildID}/commands`;

const commandData = {
  name: "minecraft",
  description: "Minecraftサーバーのコマンド",
  options: [
    {
      name: "command",
      description: "サーバーに送信するコマンド",
      type: 3,
      required: true,
      choices: [
        {
          name: "Start",
          value: "start"
        },
        {
          name: "Stop",
          value: "stop"
        }
      ],
    },
  ],
};

async function main() {
  const response = await fetch(apiEndpoint, {
    method: "post",
    body: JSON.stringify(commandData),
    headers: {
      Authorization: "Bot " + botToken,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  console.log(json);
}
main();