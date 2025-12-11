// -------------------- TONE GENERATOR --------------------
const tones = ['DO', 'RE', 'MI']
const toneCards = document.querySelectorAll('.toneCard')
const shuffleBtn = document.getElementById('shuffleBtn')

function shuffleTones() {
  toneCards.forEach((card) => {
    const randomTone = tones[Math.floor(Math.random() * tones.length)]
    card.textContent = randomTone
  })
}
shuffleBtn.addEventListener('click', shuffleTones)

// 🎵 Tone Practice Data
//arrays of tone practice data
const tonePracticeData = [
  {
    words: ['O', 'lú', 'yọ̀', 'lé'],
    tones: ['RE', 'MI', 'DO', 'MI'],
  },
  {
    words: ['Ẹ', 'lẹ́', 'yẹ', 'lẹ́'],
    tones: ['RE', 'MI', 'RE', 'MI'],
  },
  {
    words: ['Í', 'Jò', 'ko', 'dó'],
    tones: ['MI', 'DO', 'RE', 'MI'],
  },
  {
    words: ['o', 'pò', 'i', 'lé', 'ó', 'sá'],
    tones: ['RE', 'DO', 'RE', 'MI', 'MI', 'MI'],
  },
]

let toneIndex = 0
const wordRow = document.getElementById('wordRow')
const toneRow = document.getElementById('toneRow')

// Function to render current tone set
function renderTonePractice() {
  wordRow.innerHTML = ''
  toneRow.innerHTML = ''

  const current = tonePracticeData[toneIndex]

  // Render Yoruba word boxes
  current.words.forEach((word) => {
    const wordBox = document.createElement('div')
    wordBox.style.cssText = `
      width:80px; height:50px; border:1px solid gray; border-radius:6px;
      display:flex; justify-content:center; align-items:center;
      font-size:18px; background:#fff;
    `
    wordBox.textContent = word
    wordRow.appendChild(wordBox)
  })

  // Render tone boxes
  current.tones.forEach((tone) => {
    const toneBox = document.createElement('div')
    toneBox.style.cssText = `
      width:80px; height:50px; border:1px solid #aaa; border-radius:6px;
      display:flex; justify-content:center; align-items:center;
      font-size:16px; background:#f0f0f0;
    `
    toneBox.textContent = tone
    toneRow.appendChild(toneBox)
  })
}

// Navigation buttons
document.getElementById('prevTone').addEventListener('click', () => {
  toneIndex =
    (toneIndex - 1 + tonePracticeData.length) % tonePracticeData.length
  renderTonePractice()
})

document.getElementById('nextTone').addEventListener('click', () => {
  toneIndex = (toneIndex + 1) % tonePracticeData.length
  renderTonePractice()
})

// 🎵 Audio playback for the current tone set
document.getElementById('playToneAudio').addEventListener('click', () => {
  console.log('Current toneIndex:', toneIndex)

  const audioFiles = [
    'audio/oluyole.mp3',
    'audio/eleyele.mp3',
    'audio/ijokodo.mp3',
    'audio/opoileosa.mp3',
  ]

  const currentAudio = new Audio(audioFiles[toneIndex])

  setTimeout(() => {
    currentAudio.play().catch((e) => console.error('Playback failed:', e))
  }, 100)
})

// Initial render
document.addEventListener('DOMContentLoaded', renderTonePractice)

document.addEventListener('DOMContentLoaded', () => {
  const songs = [
    {
      title: 'The Horse, The Man & The Son',
      artist: 'Chief Ebeneezer Obey',
      link: 'https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR',
    },
    {
      title: 'Won Kere Si Number',
      artist: 'Fatai Rolling Dollar',
      link: 'https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd',
    },
    {
      title: 'Appreciation',
      artist: 'King Sunny Ade',
      link: 'https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U',
    },
    {
      title: 'Mumbo Jumbo',
      artist: 'Masoyinbo',
      link: 'https://www.youtube.com/clip/Ugkxss3wAGLAmw6AKX8W2RbSWoeo5aeN2DEY',
    },
    {
      title: 'Mumbo Jumbo 2',
      artist: 'Masoyinbo',
      link: 'https://www.youtube.com/clip/UgkxFbf3cle6bQgF3tC8pmw4WYBI2XwYa-ie',
    },
  ]

  const track = document.getElementById('track')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')

  // Create cards
  songs.forEach((song) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
      <button class="play-btn" onclick="window.open('${song.link}', '_blank')">
        ▶️ Play
      </button>
    `
    track.appendChild(card)
  })

  const totalCards = songs.length
  let currentIndex = 0

  // Wait for layout render
  setTimeout(() => {
    const card = track.querySelector('.card')
    const cardWidth = card.offsetWidth
    const gap = parseFloat(getComputedStyle(track).gap) || 0

    const container = document.querySelector('.roller-container')
    const visibleWidth = container.offsetWidth
    const totalTrackWidth = totalCards * (cardWidth + gap)

    // ✅ Fix calculation so last card always aligns perfectly
    const maxTranslate = Math.max(0, totalTrackWidth - visibleWidth)

    function update() {
      const translateX = (cardWidth + gap) * currentIndex
      const limitedTranslate = Math.min(translateX, maxTranslate)
      track.style.transform = `translateX(-${limitedTranslate}px)`
      prevBtn.disabled = currentIndex === 0
      nextBtn.disabled = limitedTranslate >= maxTranslate
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--
        update()
      }
    })

    nextBtn.addEventListener('click', () => {
      if ((cardWidth + gap) * (currentIndex + 1) < totalTrackWidth) {
        currentIndex++
        update()
      }
    })

    update()
  }, 300)
})

//ARGUMENT GAME
// ARGUMENT GAME

// Pronouns
const pronouns = ['Mo', 'Ìwọ', 'Ó', 'Àwa', 'Wọ́n']
const negPronouns = ['Mi ò', 'Ìwő ò', 'Kò', 'A ò', 'Wọ́n ò'] // Fixed typo: Ìwọ → Ìwő

// Verbs and their conjugations
const verbs = {
  jẹun: {
    affirmative: [
      'Mo ti jẹun',
      'Ìwọ ti jẹun',
      'Ó ti jẹun',
      'Àwa ti jẹun',
      'Wọ́n ti jẹun',
    ],
    negative: [
      'Mi ò tí jẹun',
      'Ìwọ ò tí jẹun',
      'Kò tí jẹun',
      'A ò tí jẹun',
      'Wọ́n ò tí jẹun',
    ],
  },
  lọ: {
    affirmative: ['Mo ti lọ', 'Ìwọ ti lọ', 'Ó ti lọ', 'Àwa ti lọ', 'Wọ́n ti lọ'],
    negative: [
      'Mi ò tí lọ',
      'Ìwọ ò tí lọ',
      'Kò tí lọ',
      'A ò tí lọ',
      'Wọ́n ò tí lọ',
    ],
  },
  dé: {
    affirmative: ['Mo ti dé', 'Ìwọ ti dé', 'Ó ti dé', 'Àwa ti dé', 'Wọ́n ti dé'],
    negative: [
      'Mi ò tí dé',
      'Ìwọ ò tí dé',
      'Kò tí dé',
      'A ò tí dé',
      'Wọ́n ò tí dé',
    ],
  },
  sùn: {
    affirmative: [
      'Mo ti sùn',
      'Ìwọ ti sùn',
      'Ó ti sùn',
      'Àwa ti sùn',
      'Wọ́n ti sùn',
    ],
    negative: [
      'Mi ò tí sùn',
      'Ìwő ò tí sùn',
      'Kò tí sùn',
      'A ò tí sùn',
      'Wọ́n ò tí sùn',
    ], // Fixed typo
  },
  kà: {
    affirmative: ['Mo ti kà', 'Ìwọ ti kà', 'Ó ti kà', 'Àwa ti kà', 'Wọ́n ti kà'],
    negative: [
      'Mi ò tí kà',
      'Ìwọ ò tí kà',
      'Kò tí kà',
      'A ò tí kà',
      'Wọ́n ò tí kà',
    ],
  },
}

// 🎵 Function to play audio
function playAudio(filename) {
  const audio = new Audio(`audio/${filename}.mp3`)
  audio.play().catch((err) => console.log('Audio playback failed:', err))
}

// Generate table rows dynamically
function createTable(title, dataType, verbKey) {
  const table = document.createElement('table')

  const headerRow = document.createElement('tr')
  ;['Pronoun', 'Tense', 'Verb', 'Yorùbá Sentence', 'Audio'].forEach((text) => {
    const th = document.createElement('th')
    th.textContent = text
    headerRow.appendChild(th)
  })
  table.appendChild(headerRow)

  // Loop rows
  ;(dataType === 'affirmative' ? pronouns : negPronouns).forEach(
    (pronoun, i) => {
      const row = document.createElement('tr')
      const yorubaSentence = verbs[verbKey][dataType][i]

      // Generate audio filename based on verb & pronoun index
      const audioFilename = `${dataType}_${verbKey}_${i + 1}`

      const cells = [pronoun, 'Tí', verbKey, yorubaSentence]

      cells.forEach((text) => {
        const td = document.createElement('td')
        td.textContent = text
        row.appendChild(td)
      })

      // Add clickable play button 🎵
      const audioCell = document.createElement('td')

      // 🔥 NEW LOGIC: Only enable audio for "Mo" (index 0)
      if (i === 0) {
        // "Mo" is always index 0
        const playBtn = document.createElement('button')
        playBtn.textContent = '▶️ Play'
        playBtn.onclick = () => playAudio(audioFilename)
        // Optional: Add visual indicator for active buttons
        playBtn.style.backgroundColor = '#4CAF50' // Green for active
        playBtn.style.color = 'white'
        audioCell.appendChild(playBtn)
      } else {
        // For other pronouns: create disabled button
        const disabledBtn = document.createElement('button')
        disabledBtn.textContent = '🔇' // Muted icon
        disabledBtn.disabled = true // Make it visually disabled
        disabledBtn.style.opacity = '0.5' // Grayed out
        disabledBtn.title = 'Audio not available yet' // Hover hint
        audioCell.appendChild(disabledBtn)
      }

      row.appendChild(audioCell)
      table.appendChild(row)
    }
  )

  return table
}

// Update tables when verb button clicked
function updateTables(verbKey) {
  const container = document.getElementById('tables')
  container.innerHTML = ''

  const affirmativeTable = createTable('Affirmative', 'affirmative', verbKey)
  const negativeTable = createTable('Negative', 'negative', verbKey)

  container.appendChild(affirmativeTable)
  container.appendChild(negativeTable)
}

// Default on load
updateTables('jẹun')
