const audioElements = document.querySelectorAll('audio');
const audioButtons = document.querySelectorAll('.audio');

audioButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    audioElements.forEach((audioSample) => {
      audioSample.pause();
      audioSample.currentTime = 0;
    });
    e.target.children[0].play();
  });
});