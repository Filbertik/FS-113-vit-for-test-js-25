document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.getElementById('covers');
  const marquees = document.querySelectorAll('.marquee__inner');

  function startMarquee() {
    marquees.forEach(marquee => {
      marquee.style.animation = 'marqueeMove 10s linear infinite';
    });
  }

  function stopMarquee() {
    marquees.forEach(marquee => {
      marquee.style.animation = 'none';
    });
  }

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startMarquee();
      } else {
        stopMarquee();
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.2,
  });

  observer.observe(coversSection);
});
