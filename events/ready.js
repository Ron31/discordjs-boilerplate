module.exports = async (client) => {
  const Discord = require("discord.js");
  const config = client.config;
  const numbers = require("../utils/numbers.js")
  console.log(`[INFO] ${client.user.username} has succesfully started!`);
  client.user.setStatus(`${client.config.status}`);
  let activities = config.activities;
  setInterval(function() {
    let shard = client.shard.id + 1;
    let activityRaw = activities[Math.floor(Math.random() * activities.length)];
    let activity = activityRaw.replace("$prefix", config.prefix).replace("$guilds", numbers.data.numberWithCommas(client.guilds.size)).replace("$users", numbers.data.numberWithCommas(client.users.size)).replace("$shard", shardId.toString()).replace("$shards", client.shard.count.toString());
    client.user.setActivity(activity, {type: config.activityType});
  }, 5000);
};