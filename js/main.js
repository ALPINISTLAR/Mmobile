document.querySelectorAll('.sound').forEach(function(element) {
  // Click hodisasi
  element.addEventListener('click', function() {
      handleAudio(this.getAttribute('data-key'));
      // Ustida hodisa amalga oshirilgan elementning stillarini o'zgartirish
      this.classList.add('active');
      setTimeout(function() {
          element.classList.remove('active');
      }, 200); // Misol uchun 200 millik vaqt
  });
});

// Keydown hodisasi
document.addEventListener('keydown', function(event) {
  var keyCode = event.keyCode || event.which;
  var keyElement = document.querySelector('.sound[data-key="' + keyCode + '"]');

  if (keyElement) {
      handleAudio(keyCode);
      // Ustida hodisa amalga oshirilgan elementning stillarini o'zgartirish
      keyElement.classList.add('active');
      setTimeout(function() {
          keyElement.classList.remove('active');
      }, 200); // Misol uchun 200 millik vaqt
  }
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
