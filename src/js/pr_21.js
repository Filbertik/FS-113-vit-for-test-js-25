document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'Rectangle_12',
    'Rectangle_11',
    'Rectangle_10',
    'Rectangle_9',
    'Rectangle_8',
    'Rectangle_7',
    'Rectangle_6',
    'Rectangle_5',
    'Rectangle_4',
    'first_screen_1',
  ];

  const marqueeContainers = document.querySelectorAll('.marquee__inner');

  function getImageType() {
    if (window.innerWidth <= 480) return '_m';
    if (window.innerWidth <= 768) return '_m_x2';
    return '_x2';
  }

  function populateMarquee() {
    marqueeContainers.forEach(container => {
      container.innerHTML = '';
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);

      shuffledImages.forEach(img => {
        const type = getImageType();
        const imgPath = `/img/covers/${img}${type}.jpg`;

        const imageElement = document.createElement('img');
        imageElement.classList.add('marquee__line');
        imageElement.src = imgPath;
        imageElement.alt = img;
        container.appendChild(imageElement);
      });
    });
  }

  // РћС‚СЂРёРјСѓС”РјРѕ СЃРµРєС†С–СЋ "Covers"
  const coversSection = document.getElementById('covers');

  // РЎРїРѕСЃС‚РµСЂС–РіР°С‡ РґР»СЏ СЃРµРєС†С–С— (Р· threshold 0.25)
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.25) {
          document.querySelectorAll('.marquee__line').forEach(line => {
            line.style.animationPlayState = 'running';
          });
        } else {
          document.querySelectorAll('.marquee__line').forEach(line => {
            line.style.animationPlayState = 'paused';
          });
        }
      });
    },
    { threshold: 0.15 } // 25% СЃРµРєС†С–С— РјР°С” Р±СѓС‚Рё РІРёРґРЅРѕ
  );

  // РЎРїРѕСЃС‚РµСЂС–РіР°С‚Рё Р»РёС€Рµ Р·Р° СЃРµРєС†С–С”СЋ "covers"
  observer.observe(coversSection);

  // Р—Р°РїРѕРІРЅСЋС”РјРѕ Р·РѕР±СЂР°Р¶РµРЅРЅСЏ С– РїС–РґР»Р°С€С‚РѕРІСѓС”РјРѕ С—С… РїСЂРё Р·РјС–РЅС– РµРєСЂР°РЅСѓ
  populateMarquee();
  window.addEventListener('resize', populateMarquee);
});
