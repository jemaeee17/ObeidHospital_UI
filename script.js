document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("doctorTrack");

  const clone = track.innerHTML;
  track.innerHTML += clone;
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Obeid\nSpecialized Hospital";
  const target = document.getElementById("typed-text");

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      const char = text.charAt(i);
      target.textContent += char;
      i++;
      setTimeout(typeWriter, 60);
    }
  }

  typeWriter();
});

const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const trackWrapper = document.querySelector('.carousel-track-wrapper');

scrollLeft.addEventListener('click', () => {
  trackWrapper.scrollBy({ left: -320, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  trackWrapper.scrollBy({ left: 320, behavior: 'smooth' });
});
















