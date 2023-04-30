

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);



const timePlay = (data) => {
  
const {seconds} = data;
console.log(`Actually watched : ${seconds}s`);
localStorage.setItem('videoplayer-current-time',seconds);
return seconds;
} 

const newTime = () => {
const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(currentTime);

}


player.on('timeupdate',throttle(timePlay , 1000 ));

iframe.addEventListener('load', newTime )
