// src/components/SongRolodex.jsx

import React, { useState, useEffect, useRef } from "react";
import "../styles/Rollerdex.css";



function Rollerdex() {
  // Hardcoded songs (5 total)
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
  ];

  // Render all 5 cards
  const renderCards = () => {
    return songs.map((song, index) => (
      <div key={index} className="card">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
        <button
          className="playbtn"
          onClick={() => window.open(song.link, '_blank', 'noopener,noreferrer')}
        >
          ▶️ Play
        </button>
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
        {/* Buttons disabled since no scrolling needed */}
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



export default Rollerdex