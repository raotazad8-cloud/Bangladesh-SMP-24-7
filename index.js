const mineflayer = require('mineflayer');
const http = require('http');

const bot = mineflayer.createBot({
  host: 'bangladeshsmp.progamer.me',
  username: 'BD_SMP_BOT', // মাইনক্রাফটে ইউজারনেম হিসেবে দেখাবে
  version: false
});

// বটের স্থিতি চেক করার জন্য
bot.on('spawn', () => console.log('Bangladesh SMP Bot is Spawned!'));
bot.on('error', (err) => console.log('Error:', err));
bot.on('end', () => setTimeout(() => process.exit(1), 5000)); // অটো রিস্টার্টের জন্য

// Render এর জন্য পোর্ট ৩০০০ এ সার্ভার
http.createServer((req, res) => {
  res.write("Bangladesh SMP BOT SERVICE is Running");
  res.end();
}).listen(3000);
