// 🅰️ ALPHABET PRACTICE MODULE

document.addEventListener("DOMContentLoaded", () => {
  const alphabets = [
    { letter: 'A', example: 'àjà (market)' },
    { letter: 'B', example: 'bàtà (shoe)' },
    { letter: 'D', example: 'dúdú (black)' },
    { letter: 'E', example: 'ẹnu (mouth)' },
    { letter: 'Ẹ', example: 'ẹran (meat)' },
    { letter: 'F', example: 'fifọ (washing)' },
    { letter: 'G', example: 'gẹ́gẹ́ (according to)' },
    { letter: 'GB', example: 'gbogbo (all)' },
    { letter: 'H', example: 'hàhà (laughter sound)' },
    { letter: 'I', example: 'ilé (house)' },
    { letter: 'J', example: 'jẹun (to eat)' },
    { letter: 'K', example: 'kí (to greet)' },
    { letter: 'L', example: 'láti (from)' },
    { letter: 'M', example: 'màmá (mother)' },
    { letter: 'N', example: 'nà (to beat)' },
    { letter: 'O', example: 'ọmọ (child)' },
    { letter: 'Ọ', example: 'ọ̀pá (stick)' },
    { letter: 'P', example: 'pẹ̀lẹ́ (sorry)' },
    { letter: 'R', example: 'rìn (walk)' },
    { letter: 'S', example: 'sùn (sleep)' },
    { letter: 'Ṣ', example: 'ṣé (do/make)' },
    { letter: 'T', example: 'tán (finish)' },
    { letter: 'U', example: 'ùwà (character)' },
    { letter: 'W', example: 'wọ̀n (they)' },
    { letter: 'Y', example: 'yìn (praise)' },
  ];

  let alphabetIndex = 0;
  const letterDisplay = document.getElementById('letter');
  const exampleDisplay = document.getElementById('example');
  const nextAlphaBtn = document.getElementById('next');
  const prevAlphaBtn = document.getElementById('prev');

  function updateAlphabet() {
    if (!letterDisplay || !exampleDisplay) return;
    letterDisplay.textContent = alphabets[alphabetIndex].letter;
    exampleDisplay.textContent = alphabets[alphabetIndex].example;
  }

  if (nextAlphaBtn && prevAlphaBtn) {
    nextAlphaBtn.addEventListener('click', () => {
      alphabetIndex = (alphabetIndex + 1) % alphabets.length;
      updateAlphabet();
    });

    prevAlphaBtn.addEventListener('click', () => {
      alphabetIndex = (alphabetIndex - 1 + alphabets.length) % alphabets.length;
      updateAlphabet();
    });
  }

  updateAlphabet();
});
