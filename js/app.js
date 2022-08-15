const audioElements = document.querySelectorAll('audio');
const audioButtons = document.querySelectorAll('.audio');

audioButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    stopPlayback();
    e.target.children[0].play();
  });
});

function stopPlayback() {
  audioElements.forEach((audioSample) => {
    audioSample.pause();
    audioSample.currentTime = 0;
  });
}
