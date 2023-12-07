document.querySelectorAll('.sound').forEach(function(element) {

  element.addEventListener('click', function() {
    handleAudio(this.getAttribute('data-key'));

    this.classList.add('active');
    setTimeout(function() {
      element.classList.remove('active');
    }, 100);
  });
});


document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode || event.which;
  var keyElement = document.querySelector('.sound[data-key="' + keyCode + '"]');

  if (keyElement) {
    handleAudio(keyCode);
    keyElement.classList.add('active');
    setTimeout(function() {
      keyElement.classList.remove('active');
    }, 200);
  }
});

function handleAudio(keyCode) {

  var audioElement = document.querySelector('.audio audio[data-key="' + keyCode + '"]');

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
}
