// Import your audio files
import eleyeleAudio from '../audio/eleyele.mp3'
import oluyoleAudio from '../audio/oluyole.mp3'
import ijokodoAudio from '../audio/ijokodo.mp3'
import opoileosaAudio from '../audio/opoileosa.mp3'
import Ibarapa from '../audio/Ibarapa.mp3'
import Morowore from '../audio/Morowore.mp3'
import igba from '../audio/igba.mp3'
import eredodo from '../audio//homonyms/ere/eredodo.mp3'
import ereredo from '../audio//homonyms/ere/ereredo.mp3'
import ereremi from '../audio//homonyms/ere/ereremi.mp3'
import ojododo from '../audio//homonyms/ojo/ojododo.mp3'
import ojodomi from '../audio//homonyms/ojo/ojodomi.mp3'
import ojomimi from '../audio//homonyms/ojo/ojomimi.mp3'
import ojomire from '../audio//homonyms/ojo/ojomire.mp3'
import ojorere from '../audio//homonyms/ojo/ojorere.mp3'
import okododo from '../audio//homonyms/oko/okododo.mp3'
import okomire from '../audio//homonyms/oko/okomire.mp3'
import okoredo from '../audio//homonyms/oko/okoredo.mp3'
import okoremi from '../audio//homonyms/oko/okoremi.mp3'
import okorere from '../audio//homonyms/oko/okorere.mp3'

// Verb conjugation data
export const gameData = [
  {
    word: 'eleyele',
    audioFile: eleyeleAudio,
    options: ['Do Do Do Do', 'Re Do Re Do', 'Re Mi Re Mi', 'Do Re Do Re'],
    correct: 2,
    category: 'location',
    sentence: "Mo ti kọ àmọ̀ràn 'eleyele' ní àkọ̀kọ́ nínú àpèjọ yìí.",
    translation: "I wrote the word 'eleyele' first in this meeting.",
  },
  {
    word: 'oluyole',
    audioFile: oluyoleAudio,
    options: ['Mi Re Mi Re', 'Re Mi Do Mi', 'Re Mi Re Mi', 'Do Mi Do Mi'],
    correct: 1,
    category: 'location',
    sentence: 'Olúyọ̀lé jẹ́ orílẹ̀-èdè tó wà ní àgbègbè Oyo.',
    translation: 'Oluyole is a town located in Oyo region.',
  },
  {
    word: 'ijokodo',
    audioFile: ijokodoAudio,
    options: ['Mi Do Re Mi', 'Re Do Re Do', 'Mi Re Mi Re', 'Do Do Do Do'],
    correct: 0,
    category: 'location',
    sentence: 'Mo gbọ́ nípa ìjọkòdò nípa àwọn àkójọ àròsọ̀ Yorùbá.',
    translation: 'I learned about Ijokodo through Yoruba history records.',
  },
  {
    word: 'opoileosa',
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
    word: 'Ibarapa',
    audioFile: Ibarapa,
    options: ['Do Do Do Mi ', 'Mi Re Do Re ', 'Re Do Re Mi ', 'Do Mi Do Do'],
    correct: 0,
    category: 'location',
    sentence: 'Ìbàràpá jẹ́ ìlú tó wà ní ìwọ̀ọ̀dọ̀ ìpínlẹ̀ Oyo.',
    translation: 'Ibarapa is a town located in the western part of Oyo State.',
  },
  {
    word: 'Morowore',
    audioFile: Morowore,
    options: ['Re Do Re Do', 'Do Re Do Re', 'Re Mi Mi Do', 'Do Mi Do Do'],
    correct: 2,
    category: 'word',
    sentence: "Mo nílò láti sọ 'mọ́rọ̀wọ́rẹ̀' ní ọ̀nà tó tọ́.",
    translation: "I need to pronounce 'morowore' correctly.",
  },
  {
    word: 'Ìgbà',
    audioFile: igba,
    options: ['Re Re', 'Do Mi', 'Do Do', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: 'Mo ní ìgbà kan láti kọ ìwé yìí.',
    translation: 'I have one hour (igba) to write this document.', // Note: Using time meaning for homonym context
  },
  {
    word: 'èrè',
    audioFile: eredodo,
    options: ['Re Re', 'Do Mi', 'Do Do', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'erè',
    audioFile: ereredo,
    options: ['Re Do', 'Do Mi', 'Do Do', 'Mi Do'],
    correct: 0,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'eré',
    audioFile: ereremi,
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Mi Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'òjò',
    audioFile: ojododo,
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 3,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'òjó',
    audioFile: ojodomi,
    options: ['Re Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 1,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'ójó',
    audioFile: ojomimi,
    options: ['Re Re', 'Do Mi', 'Mi Mi', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'ójo',
    audioFile: ojomire,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 0,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'ojo',
    audioFile: ojorere,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Re Re'],
    correct: 3,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'òkò',
    audioFile: okododo,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 3,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'óko',
    audioFile: okomire,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 0,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'okó',
    audioFile: okoredo,
    options: ['Mi Re', 'Do Mi', 'Re Do', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'okó',
    audioFile: okoremi,
    options: ['Mi Re', 'Do Mi', 'Re Mi', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
  {
    word: 'oko',
    audioFile: okorere,
    options: ['Mi Re', 'Do Mi', 'Re Re', 'Do Do'],
    correct: 2,
    category: 'homonyns',
    sentence: '',
    translation: '', // Note: Using time meaning for homonym context
  },
]
