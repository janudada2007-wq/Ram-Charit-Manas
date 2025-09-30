document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      contents.forEach(content => {
        content.classList.toggle('active', content.id === target);
      });
    });
  });

  // Naam Jap Counter
  const incrementBtn = document.getElementById('incrementBtn');
  const counter = document.getElementById('counter');
  let count = 0;

  incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });

  // Reading Section: Verse Navigation
  const verses = [
    {
      kand: 'Bal Kand',
      verses: [
        {
          text: 'श्रीगुरु चरन सरोज रज निज मन मुकुर सुधारि।',
          meaning: 'श्री गुरु के चरण कमलों की धूलि से अपने मन रूपी दर्पण को साफ करके।'
        },
        {
          text: 'बरनउँ रघुवर विषेस गुण।',
          meaning: 'मैं रघुकुल में विशेष गुणों वाले राम का वर्णन करता हूँ।'
        }
      ]
    },
    {
      kand: 'Ayodhya Kand',
      verses: [
        {
          text: 'सुनहु प्रभु गिरिधरी कहानी।',
          meaning: 'हे प्रभु गिरिधर! मेरी कहानी सुनो।'
        }
      ]
    },
    {
      kand: 'Aranya Kand',
      verses: [
        {
          text: 'वनवास धर्म समज राखन।',
          meaning: 'वनवास के धर्म को समझकर पालन करना।'
        }
      ]
    }
  ];

  const kandSelect = document.getElementById('kandSelect');
  const verseText = document.querySelector('.verse-text');
  const verseMeaning = document.querySelector('.meaning');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const kandNameEl = document.querySelector('.kand-name');
  const verseNumEl = document.querySelector('.verse-num');

  let currentKandIndex = 0;
  let currentVerseIndex = 0;

  function updateVerse() {
    const kand = verses[currentKandIndex];
    const verse = kand.verses[currentVerseIndex];

    kandNameEl.textContent = `❤️ ${kand.kand}`;
    verseNumEl.textContent = `Verse ${currentVerseIndex + 1} of ${kand.verses.length}`;
    verseText.textContent = verse.text;
    verseMeaning.innerHTML = `<strong>अर्थ (Meaning):</strong><br />${verse.meaning}`;
  }

  kandSelect.addEventListener('change', () => {
    currentKandIndex = verses.findIndex(k => k.kand === kandSelect.value);
    currentVerseIndex = 0;
    updateVerse();
  });

  prevBtn.addEventListener('click', () => {
    if (currentVerseIndex > 0) {
      currentVerseIndex--;
      updateVerse();
    }
  });

  nextBtn.addEventListener('click', () => {
    const kand = verses[currentKandIndex];
    if (currentVerseIndex < kand.verses.length - 1) {
      currentVerseIndex++;
      updateVerse();
    }
  });

  // Initialize
  kandSelect.value = verses.kand;
  updateVerse();
});
