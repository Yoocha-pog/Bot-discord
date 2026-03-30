const { Client, GatewayIntentBits, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log('Bot ligado!');
});

client.on('messageCreate', async message => {
  if (message.content === '!painel') {

    const button = new ButtonBuilder()
      .setCustomId('aviso')
      .setLabel('📢 Fazer Aviso')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(button);

    message.channel.send({
      content: '🔧 Painel do servidor:',
      components: [row]
    });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'aviso') {
    await interaction.reply('📢 Aviso enviado!');
  }
});

client.login(process.env.TOKEN);
"scripts": {
  "start": "node index.js"
}
