// src/components/SongRolodex.jsx

import React, { useState } from "react";
import "../styles/Rollerdex.css";

function Rollerdex() {
  // State to track which card is expanded (null = none expanded)
  const [expandedCard, setExpandedCard] = useState(null);

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
      translation: `
[Verse 1]
The horse, the man and the son
In the land of Yoruba
Honor and respect
Through rights and freedom

[Chorus]
Let us respect each other
In this land we live
The horse, the man and the son
Living together in peace
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
      translation: `
[Chorus]
They reduced to number
They reduced to number
Why did they reduce to number?
They said there's no money

[Verse 1]
When money is not there
Things don't work properly
But we will keep trying
To find it again
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
      translation: `
[Verse 1]
Thank you for everything
That you've done for me
God will bless you
With space and health

[Chorus]
Appreciation, appreciation
For those who did good
Appreciation, appreciation
Your kindness won't be forgotten
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
Nígbà tí a kò mọ ohun tí a ń sọ

[Chorus]
Mumbo jumbo, jumbo mumbo
Kí ló ń ṣẹlẹ̀?
Mumbo jumbo, jumbo mumbo
Jẹ́ kí a mọ̀ ọ́
      `,
      translation: `
[Verse 1]
Mumbo jumbo, senseless
Words without meaning
But we keep saying it
When we don't know what we're saying

[Chorus]
Mumbo jumbo, jumbo mumbo
What's happening?
Mumbo jumbo, jumbo mumbo
Let's understand it
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
      translation: `
[Verse 1]
Mumbo jumbo part two
Another matter coming
Let's discuss it
About these things

[Bridge]
Deep meaning
We are seeking
Mumbo jumbo 2
Let's understand it
      `,
    },
  ];

  // Toggle lyrics visibility
  const toggleLyrics = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div
        key={index}
        className={`card ${expandedCard === index ? "expanded" : ""}`}
      >
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

          <button className="lyricsbtn" onClick={() => toggleLyrics(index)}>
            {expandedCard === index ? "Hide Lyrics" : " Lyrics"}
          </button>
        </div>

        {/* Lyrics Section - Only show when expanded */}
        {expandedCard === index && (
          <div className="lyrics-content">
            <div className="lyrics-section">
              <h4>🎵 Lyrics (Yoruba)</h4>
              <pre className="lyrics-text">{song.lyrics}</pre>
            </div>

            {/* {song.translation && (
              <div className="translation-section">
                <h4>📖 English Translation</h4>
                <pre className="lyrics-text translation">
                  {song.translation}
                </pre>
              </div>
            )} */}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="rolodex-container">
      <hr className="section-divider" />
      <h2 id="heading5">Songs & References Roller Dex</h2>

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
