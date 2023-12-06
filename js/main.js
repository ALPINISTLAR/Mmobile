document.addEventListener('keydown', function(event) {
  handleAudio(event.keyCode || event.which);
});

document.querySelectorAll('.sound').forEach(function(element) {
  element.addEventListener('click', function() {
      handleAudio(this.getAttribute('data-key'));
  });
});

function handleAudio(keyCode) {
  // Audio elementini tanlash
  var audioElement = document.querySelector('.audio audio[data-key="' + keyCode + '"]');

  // Agar audio fayli topilsa, uni ijro etish
  if (audioElement) {
      audioElement.currentTime = 0; // Qayta boshlash uchun
      audioElement.play();
  }
}
