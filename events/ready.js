module.exports = async (client) => {
  const Discord = require("discord.js");
  const config = client.config;
  const numbers = require("../utils/numbers.js")
  console.log(`[INFO] ${client.user.username} has succesfully started!`);
  client.user.setStatus(`${client.config.status}`);
  let activities = config.activities;
  setInterval(function() {
    let activityRaw = activities[Math.floor(Math.random() * activities.length)];
    let activity = activityRaw.replace("$prefix", config.prefix).replace("$guilds", numbers.data.numberWithCommas(client.guilds.size)).replace("$users", numbers.data.numberWithCommas(client.users.size))
    client.user.setActivity(activity, {type: config.activityType});
  }, 5000);
};
