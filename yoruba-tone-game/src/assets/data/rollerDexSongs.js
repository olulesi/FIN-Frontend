import horseManSonCover from '../images/covers/horseManSonCover.jpg'
import wonKereSiCover from '../images/covers/wonKereSiCover.jpg'
import appreciationCover from '../images/covers/appreciationCover.jpg'
import mmsCover from '../images/covers/mmsCover.jpg'
import eWaBaMijoCover from '../images/covers/eWaBaMijoCover.jpg'
import GboTemiCover from '../images/covers/GboTemiCover.png'
import GbemidebeCover from '../images/covers/GbemidebeCover.png'

export const getRollerDexSongs = (songsBaseUrl) => [
  {
    title: 'The Horse, The Man & The Son',
    artist: 'Chief Ebeneezer Obey',
    link: 'https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR',
    audioFile: `${songsBaseUrl}/TheHorseTheManTheSonFIN.mp3`,
    coverImage: horseManSonCover,
    lyrics: `Ko s'ogbon to le da, 
    ko si wa to le wu
Ko si ona ti o le mo 
to le fi t'aye lorun o`,
  },
  {
    title: 'Won Kere Si Number',
    artist: 'Fatai Rolling Dollar',
    link: 'https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd',
    audioFile: `${songsBaseUrl}/wonKereSiFIN.mp3`,
    coverImage: wonKereSiCover,
    lyrics: `a ni won kere si number wa
won kere si number baba
won kere si number wa
awon omode won yi kere si number wa
won kere si number wa
won kere si number wa
won kere si number wa
awon omode won yi kere si number wa`,
  },
  {
    title: 'Appreciation',
    artist: 'King Sunny Ade',
    link: 'https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U',
    audioFile: `${songsBaseUrl}/AppreciationFIN.mp3`,
    coverImage: appreciationCover,
    lyrics: `Appreciation
Mo dupe
Onibu'ore Baba gb'ope mi
Appreciation
Mo dupe
Onibu'ore Baba gb'ope mi`,
  },
  {
    title: 'MMS',
    artist: 'Asake ft Wizkid',
    link: 'https://www.youtube.com/clip/UgkxNc5VLeHs9GbdxGirGHwHiM7iFgeqiPou',
    audioFile: `${songsBaseUrl}/MMSFIN.mp3`,
    coverImage: mmsCover,
    lyrics: `Mo dupẹ lọwọ Ọlọhun ta wa sa nle o
Mo ware, ware titi, mo dẹ ṣaamin o
A dupẹ lọwọ ọlọun to ko mi yọ
Ka dẹ ma ṣeun ta le ṣe, ka dẹ ma yọọ`,
  },
  {
    title: 'E wa Ba Mijo',
    artist: 'Tony Tetuila',
    link: 'https://www.youtube.com/clip/UgkxWA1TSNUzongnbVVut-kv6ABtzzXyqxh4',
    audioFile: `${songsBaseUrl}/eWaBaMiJoFIN.mp3`,
    coverImage: eWaBaMijoCover,
    lyrics: `Challenge: Try this no lyrics`,
  },
  {
    title: 'Gbọ Temi',
    artist: 'Tony Tetuila',
    link: 'https://www.youtube.com/watch?v=Sstbc2kDLZQ',
    audioFile: `${songsBaseUrl}/GboTemiFIN.mp3`,
    coverImage: GboTemiCover,
    lyrics: `Baby mi jowo o, je k'a jo ma gbadun
Olo mi jowo o, je k'a jo ma gbadun
Aya t'o mo yayi lo n s'eke oko re
B'elegan ba n tan e ko ma ma se gba o`,
  },
  {
    title: 'Gbemidebe',
    artist: 'Boj ft Ajebutter22',
    link: 'Chief Ebeneezer Obey',
    audioFile: `${songsBaseUrl}/GbemidebeFIN.mp3`,
    coverImage: GbemidebeCover,
    lyrics: `Je kin slow down fun e a need lati rush
Awa ni kan, la wa ni le a need lati hush
Bo se gbe horsepower o kan dabi Porsche (Oh God)
O ma fe kin bebe, oma fe ma blush
But I put my hands together, bi mo gbadura ni church
Olorun ti so fun mi pe, iwo ni ma soft
Toba de ti soft, ma de gbe e summersault`,
  },
]
