const folder = '/home/lenny/music/';
const fs = require('fs');
const player = require('play-sound')(opts = {
	player: 'mplayer'
})

let songs = [];
let currentSong = 0;

fs.readdir(folder, (err, files) => {
	if (err) {
		return console.log(err);
	}
	for (let i = 0; i <= files.length; i++) {
		if (files[i]) {
			if (files[i].includes('.wav') || files[i].includes('.mp3') || files[i].includes('.m4a')) {
				songs.push(files[i]);
			}
		}
	}
	play(currentSong);
});

function play(song) {
	// console.log(`${folder}${songs[song]}`);
	player.play(`${folder}${songs[song]}`, function (err) {
		if (err) {
			console.log(err);
		}
		currentSong++;
		if(currentSong > songs.length) {
			currentSong = 0;
		}
		play(currentSong);
	});
}