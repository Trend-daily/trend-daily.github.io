
    // zoom.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.zoom-container');
  const image = container.querySelector('.zoom-image');
  const magnifier = container.querySelector('.magnifier');

  function moveMagnifier(e) {
    e.preventDefault();

    const rect = container.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    const bgX = (x / container.offsetWidth) * 100;
    const bgY = (y / container.offsetHeight) * 100;

    magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
    magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
    magnifier.style.display = 'block';
  }

  function endMagnifier() {
    magnifier.style.display = 'none';
  }

  // Set magnifier background image
  magnifier.style.backgroundImage = `url(${image.src})`;
  magnifier.style.backgroundSize = `${image.width * 3}px ${image.height * 3}px`;

  // Desktop
  container.addEventListener('mousemove', moveMagnifier);
  container.addEventListener('mouseleave', endMagnifier);

  // Mobile
  container.addEventListener('touchstart', moveMagnifier, { passive: false });
  container.addEventListener('touchmove', moveMagnifier, { passive: false });
  container.addEventListener('touchend', endMagnifier);
});