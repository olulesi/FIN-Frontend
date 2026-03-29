// Import your audio files
import eleyeleAudio from '../audio/eleyele.mp3'
import oluyoleAudio from '../audio/oluyole.mp3'
import ijokodoAudio from '../audio/ijokodo.mp3'
import opoileosaAudio from '../audio/opoileosa.mp3'
import Ibarapa from '../audio/Ibarapa.mp3'
import Morowore from '../audio/Morowore.mp3'
import igba from '../audio/igba.mp3'
import eredodo from '../audio/homonyms/ere/eredodo.mp3'
import ereremi from '../audio/homonyms/ere/ereremi.mp3'
import ojododo from '../audio/homonyms/ojo/ojododo.mp3'
import ojodomi from '../audio/homonyms/ojo/ojodomi.mp3'
import ojomimi from '../audio/homonyms/ojo/ojomimi.mp3'
import okododo from '../audio/homonyms/oko/okododo.mp3'
import okomire from '../audio/homonyms/oko/okomire.mp3'
import okoredo from '../audio/homonyms/oko/okoredo.mp3'
import okoremi from '../audio/homonyms/oko/okoremi.mp3'
import okorere from '../audio/homonyms/oko/okorere.mp3'

import IgbaTimeImg from '../images/homonyms/igba-time.jpg'
import ereRewardImg from '../images/homonyms/ere/ere-reward.jpg'
import erePlayImg from '../images/homonyms/ere/ere-play.jpg'
import ojoRainImg from '../images/homonyms/ojo/ojo-rain.jpg'
import ojoBurn from '../images/homonyms/ojo/ojo-burn.jpg'
import ojoCowardImg from '../images/homonyms/ojo/ojo-coward.jpg'
import okoPackedIt from '../images/homonyms/oko/oko-packed.jpg'
import okoSpearImg from '../images/homonyms/oko/oko-spear.jpg'
import okoHusbandImg from '../images/homonyms/oko/oko-husband.jpg'
import okoVehicleImg from '../images/homonyms/oko/oko-vehicle.jpg'
// import okoFarmImg from "../images/homonyms/oko/oko-farm.jpg";
import okoStoneImg from '../images/homonyms/oko/oko-stone.jpg'

// DATA
export const gameData = [
  // LOCATIONS (keep your existing location entries)
  {
    word: 'Ẹlẹ́yẹlé',
    audioFile: eleyeleAudio,
    options: ['Do Do Do Do', 'Re Do Re Do', 'Re Mi Re Mi', 'Do Re Do Re'],
    correct: 2,
    category: 'location',
    sentence: "Mo ti kọ àmọ̀ràn 'eleyele' ní àkọ̀kọ́ nínú àpèjọ yìí.",
    translation: "I wrote the word 'eleyele' first in this meeting.",
  },
  {
    word: 'Olúyọ̀lé',
    audioFile: oluyoleAudio,
    options: ['Mi Re Mi Re', 'Re Mi Do Mi', 'Re Mi Re Mi', 'Do Mi Do Mi'],
    correct: 1,
    category: 'location',
    sentence: 'Olúyọ̀lé jẹ́ orílẹ̀-èdè tó wà ní àgbègbè Oyo.',
    translation: 'Oluyole is a town located in Oyo region.',
  },
  {
    word: 'ÍJòkodó',
    audioFile: ijokodoAudio,
    options: ['Mi Do Re Mi', 'Re Do Re Do', 'Mi Re Mi Re', 'Do Do Do Do'],
    correct: 0,
    category: 'location',
    sentence: 'Mo gbọ́ nípa ìjọkòdò nípa àwọn àkójọ àròsọ̀ Yorùbá.',
    translation: 'I learned about Ijokodo through Yoruba history records.',
  },
  {
    word: 'opòiléósá',
    audioFile: opoileosaAudio,
    options: [
      'Re Do Re Do Re Do',
      'Do Re Do Re Do Re',
      'Do Do Do Do Do Do',
      'Re Do Re Mi Mi Mi',
    ],
    correct: 3,
    category: 'location',
    sentence: 'Ọpọ́-ilé-ọ̀ṣà jẹ́ àgbègbè tó ní àwọn ilé ọ̀ṣà pọ̀.',
    translation: 'Opoileosa is an area known for having many police stations.',
  },
  {
    word: 'Ìbàràpá',
    audioFile: Ibarapa,
    options: ['Do Do Do Mi ', 'Mi Re Do Re ', 'Re Do Re Mi ', 'Do Mi Do Do'],
    correct: 0,
    category: 'location',
    sentence: 'Ìbàràpá jẹ́ ìlú tó wà ní ìwọ̀ọ̀dọ̀ ìpínlẹ̀ Oyo.',
    translation: 'Ibarapa is a town located in the western part of Oyo State.',
  },

  // WORDS
  {
    word: 'Morówórè',
    audioFile: Morowore,
    options: ['Re Do Re Do', 'Do Re Do Re', 'Re Mi Mi Do', 'Do Mi Do Do'],
    correct: 2,
    category: 'word',
    sentence: "Mo nílò láti sọ 'mọ́rọ̀wọ́rẹ̀' ní ọ̀nà tó tọ́.",
    translation: "I need to pronounce 'morowore' correctly.",
  },

  // ===== HOMONYMS WITH ALL 11 IMAGES =====
  {
    word: 'Ìgbà',
    audioFile: igba,
    imageFile: IgbaTimeImg,
    options: ['Re Re', 'Do Mi', 'Do Do', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Mo ní ìgbà kan láti kọ ìwé yìí.',
    translation: 'I have one hour (igba) to write this document.',
  },

  // ERE (2 image)
  {
    word: 'èrè',
    audioFile: eredodo,
    imageFile: ereRewardImg, // Image: reward/profit
    options: ['Re Re', 'Do Mi', 'Do Do', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Mo gba èrè tó tó fún iṣẹ́ mi.',
    translation: 'I received adequate reward for my work.',
  },
  {
    word: 'eré',
    audioFile: ereremi,
    imageFile: erePlayImg, // Image: play/game
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Àwọn ọmọdé ń ṣeré ní ibi ìdárayá.',
    translation: 'The children are playing at the playground.',
  },

  // OJO Group (4 images)
  {
    word: 'òjò',
    audioFile: ojododo,
    imageFile: ojoRainImg,
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 3,
    category: 'homonyns',
    sentence: 'Òjò ń rọ̀ lónìí.',
    translation: 'Rain is falling today.',
  },
  {
    word: 'òjó',
    audioFile: ojodomi,
    imageFile: ojoCowardImg,
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 1,
    category: 'homonyns',
    sentence: 'Lónìí jẹ́ òjó pàtàkì.',
    translation: 'Today is an important day.',
  },

  {
    word: 'ó jó',
    audioFile: ojomimi,
    imageFile: ojoBurn,
    options: ['Mi Re', 'Mi Mi', 'Re Mi', 'Re Re'],
    correct: 1,
    category: 'homonyns',
    sentence: 'Ọkùnrin yìí jẹ́ ojo.',
    translation: 'This man is a coward.',
  },

  // OKO Group (5 images)
  {
    word: 'òkò',
    audioFile: okododo,
    imageFile: okoStoneImg,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 3,
    category: 'homonyns',
    sentence: 'Ó fi òkò dá ọdẹ.',
    translation: 'He used a spear for hunting.',
  },
  {
    word: 'óko',
    audioFile: okomire,
    imageFile: okoPackedIt,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 0,
    category: 'homonyns',
    sentence: 'Óko rẹ̀ jẹ́ olùkọ́.',
    translation: 'Her husband is a teacher.',
  },
  {
    word: 'ọkọ̀',
    audioFile: okoredo,
    imageFile: okoVehicleImg,
    options: ['Mi Re', 'Do Mi', 'Re Do', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Ó ra ọkọ̀ tuntun.',
    translation: 'He bought a new car.',
  },
  {
    word: 'okó',
    audioFile: okoremi,
    imageFile: okoSpearImg,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Ó lọ sí okó láti gbin iṣu.',
    translation: 'He went to the farm to plant yams.',
  },
  {
    word: 'ọkọ',
    audioFile: okorere,
    imageFile: okoHusbandImg, // Image: husband
    options: ['Mi Re', 'Do Mi', 'Re Re', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Ó ju oko sí inú odò.',
    translation: 'He threw a stone into the river.',
  },
]
