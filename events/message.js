module.exports = async (client, message) => {
  if (message.author.bot) {
    return;
  }
  if (message.channel.type === "dm") {
    // return message.channel.send("This bot doesn't support DM commands");
  }

  let prefix = client.config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) {
    return;
  }

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  if (commandFile) {
    commandFile.run(msg, args, client);
 }
};