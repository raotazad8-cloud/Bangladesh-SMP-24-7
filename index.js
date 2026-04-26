const mineflayer = require('mineflayer');
const http = require('http');

const botArgs = {
    host: 'bangladeshsmp.progamer.me',
    username: 'BD_SMP_BOT',
    version: "1.21.1" // এখানে ১.২১.১ ভার্সনটি ফিক্সড করে দেওয়া হয়েছে
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('spawn', () => {
        console.log('Bangladesh SMP Bot (1.21.1) is now online!');
    });

    bot.on('error', (err) => {
        console.log('Connection Error:', err.message);
    });

    bot.on('end', () => {
        console.log('Disconnected from server. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });
}

createBot();

// Render/UptimeRobot এর জন্য ওয়েব সার্ভার
http.createServer((req, res) => {
    res.write("Bangladesh SMP Bot Service is Running");
    res.end();
}).listen(3000);
