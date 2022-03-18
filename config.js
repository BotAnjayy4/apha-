/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6289667644225','6281515881647','6285748626698']
global.pemilik = ['6289667644225']
global.premium = ['6285748626698']
global.pengguna = 'InzGanz'
global.botnma = 'X1Botz'
global.harga = '10k'
global.atasreply = 'Save Me' //BUAT REPLAY DI ATAS NYA ADA TEXT
global.atasreply2 = 'Thanks' //BUAT REPLAY DI ATAS NYA ADA TEXT KE 2
global.webreply = 'wa.me/6289667644225' //URL DI ATAS REPLAY
global.webreply2 = 'Sama-Sama' //URL BUAT DI ATAS REPLAY KE 2
global.melcanz = 'InzGanz'
global.footer = 'InzGanz' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'Wa.me/6289667644225' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/BotAnjayy4' //Ubah Jga Bebas Sama lu 
global.ganti = 'Number Owner' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'
global.accestken = 'InzGanz'
global.ownernma = 'IndraGanz'
global.packname = 'X1Botz'
global.author = 'InzGanz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Udah Kan? ',
    admin: 'Fitur Khusus Admin Group!😞',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!❌',
    owner: 'Fitur Khusus Owner Bot❌',
    group: 'Fitur Digunakan Hanya Untuk Group!❌',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!❌',
    bot: 'Fitur Khusus Pengguna Nomor Bot❌',
    wait: 'Sabar Lagi Di Proses . . . . ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
