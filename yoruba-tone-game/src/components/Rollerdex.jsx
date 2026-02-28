// src/components/SongRolodex.jsx

import React, { useState } from "react";
import "../styles/Rollerdex.css";

function Rollerdex() {
  // State for lyrics display
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentSongLyrics, setCurrentSongLyrics] = useState("");
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [currentSongArtist, setCurrentSongArtist] = useState("");

  // Hardcoded songs with lyrics (5 total)
  const songs = [
    {
      title: "The Horse, The Man & The Son",
      artist: "Chief Ebeneezer Obey",
      link: "https://www.youtube.com/clip/UgkxbfbRpvYXfcdXDgOgVP30v4xR2avdCJRR",
      lyrics: `
[Verse 1]
Ẹṣin, ọkùnrin àti ọmọ
Ní ilẹ̀ Yorùbá ayé
Ọlá àti òyìnbó
Nípa ẹ̀tọ́ àti òmìnira

[Chorus]
Kí a máa bọ̀wọ̀ fún ara wa
Ní ilẹ̀ yìí tí a ń gbé
Ẹṣin, ọkùnrin àti ọmọ
Jọ ń gbé ní àlàáfíà
      `,
    },
    {
      title: "Won Kere Si Number",
      artist: "Fatai Rolling Dollar",
      link: "https://www.youtube.com/clip/UgkxuqPQ0aF58opBjzMeT6xxSbG4It59x0Wd",
      lyrics: `
[Chorus]
Wọn kéré sí nọ́mbà
Wọn kéré sí nọ́mbà
Kí ló dé tí wọn kéré sí nọ́mbà?
Wọ́n ní kò sí owó

[Verse 1]
Nígbà tí owó kò bá sí
Nǹkan kì í ṣe déédé
Ṣùgbọ́n a ó máa gbìyànjú
Kí a lè rí i padà
      `,
    },
    {
      title: "Appreciation",
      artist: "King Sunny Ade",
      link: "https://www.youtube.com/clip/Ugkx999WH8ccSsMh2j4e974MquindL0-8Y1U",
      lyrics: `
[Verse 1]
Ẹ ṣeun fún gbogbo rẹ̀
Tí ẹ̀ ṣe fún mi
Ọlọ́run á bùkún yín
Ní ààyè àti ìlera

[Chorus]
Appreciation, appreciation
Fún àwọn tí wọ́n ṣe rere
Appreciation, appreciation
Ẹ̀ṣẹ́ yín kò ní parẹ́
      `,
    },
    {
      title: "Mumbo Jumbo",
      artist: "Masoyinbo",
      link: "https://www.youtube.com/clip/Ugkxss3wAGLAmw6AKX8W2RbSWoeo5aeN2DEY",
      lyrics: `
[Verse 1]
Mumbo jumbo, kò lẹ́yìn
Ọ̀rọ̀ tí kò ní ìtumọ̀
Ṣùgbọ́n a máa ń sọ ọ́
Nígbà tí a kò mọ̀ ohun tí a ń sọ

[Chorus]
Mumbo jumbo, jumbo mumbo
Kí ló ń ṣẹlẹ̀?
Mumbo jumbo, jumbo mumbo
Jẹ́ kí a mọ̀ ọ́
      `,
    },
    {
      title: "Mumbo Jumbo 2",
      artist: "Masoyinbo",
      link: "https://www.youtube.com/clip/UgkxFbf3cle6bQgF3tC8pmw4WYBI2XwYa-ie",
      lyrics: `
[Verse 1]
Mumbo jumbo part two
Ọ̀rọ̀ míràn tí ń bọ̀
Kí a máa fi sọ̀rọ̀
Nípa àwọn nǹkan yìí

[Bridge]
Ìjìnlẹ̀ ọ̀rọ̀
Ní a ń wá
Mumbo jumbo 2
Kí a lè mọ̀ ọ́n
      `,
    },
  ];

  // Show lyrics
  const showLyricsModal = (song) => {
    setCurrentSongLyrics(song.lyrics);
    setCurrentSongTitle(song.title);
    setCurrentSongArtist(song.artist);
    setShowLyrics(true);
  };

  // Hide lyrics
  const hideLyrics = () => {
    setShowLyrics(false);
  };

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div key={index} className="card">
        <h3>{song.title}</h3>
        <p className="artist">{song.artist}</p>

        <div className="button-group">
          <button
            className="playbtn"
            onClick={() =>
              window.open(song.link, "_blank", "noopener,noreferrer")
            }
          >
            ▶️ Play
          </button>

          <button className="lyricsbtn" onClick={() => showLyricsModal(song)}>
            📝 Lyrics
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="rolodex-container">
      <hr className="section-divider" />
      <h2 id="heading5">Songs & References Roller Dex</h2>

      {/* Lyrics Container - Inline at top, pushes content down */}
      {showLyrics && (
        <div className="lyrics-container">
          <div className="lyrics-header">
            <h3>{currentSongTitle}</h3>
            <p className="lyrics-artist">{currentSongArtist}</p>
            <button className="close-btn" onClick={hideLyrics}>
              ✕ Close Lyrics
            </button>
          </div>

          <div className="lyrics-body">
            <pre className="lyrics-text">{currentSongLyrics}</pre>
          </div>
        </div>
      )}

      {/* Song Cards - Below lyrics container */}
      <div className="roller-container">
        <div className="track" id="track">
          {renderCards()}
        </div>
      </div>

      <div className="controls">
        <button id="prevBtn" disabled>
          ← Prev
        </button>
        <button id="nextBtn" disabled>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Rollerdex;
