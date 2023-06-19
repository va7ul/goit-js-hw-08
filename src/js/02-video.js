import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const saveTime = function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);    
};


player.on('timeupdate', throttle(saveTime, 1000));


const getCurrentTime = function (event) {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    return currentTime;
};


player.setCurrentTime(getCurrentTime()).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});