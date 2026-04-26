const mineflayer = require('mineflayer');
const http = require('http');

const botArgs = {
    host: 'bangladeshsmp.progamer.me', // আপনার আইপি
    username: 'Bangladesh_SMP_BOT',    // বটের নাম (স্পেস ছাড়া ভালো)
    version: false                     // এটি অটোমেটিক ভার্সন ডিটেক্ট করবে
};

function createBot() {
    const bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log('Bot has logged in!');
    });

    // সার্ভার থেকে কিক খেলে অটো-রিস্টার্ট হবে
    bot.on('end', () => {
        console.log('Disconnected! Retrying in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();

// Vercel/UptimeRobot এর জন্য ওয়েব সার্ভার
http.createServer((req, res) => {
    res.write("BOT IS ONLINE");
    res.end();
}).listen(3000);
