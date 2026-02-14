// src/components/YorubaUseCasesCarousel.jsx
import { useState, useRef, useEffect } from "react";
import "../styles/YorubaUseCasesCarousel.css";

const YorubaUseCasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0); // default speed
  const videoRef = useRef(null);

  // Your video data
  const videos = [
    {
      src: "/videos/yorubaUseCase1.mp4",
      keywords: ["comedy", "dialogue"],
    },
    {
      src: "/videos/yorubaUseCase2.mp4",
      keywords: ["comedy", "dialogue"],
    },
    {
      src: "/videos/yorubaUseCase3.mp4",
      keywords: ["comedy", "dialogue"],
    },
    {
      src: "/videos/yorubaUseCase4.mp4",
      keywords: ["comedy", "dialogue"],
    },
    {
      src: "/videos/yorubaUseCase5.mp4",
      keywords: ["comedy", "dialogue"],
    },
  ];

  const totalVideos = videos.length;

  // Update playback rate on video element when changed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
    setPlaybackRate(1.0); // reset speed per video (optional)
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
    setPlaybackRate(1.0);
  };

  const currentVideo = videos[currentIndex];

    return (
      <section className="yoruba-use-cases">
        <hr />
        <h2 className="yorubaheader">Yoruba Use Cases</h2>
        <div className="carousel-container">
          {/* Video Player */}
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={currentVideo.src}
              controls            
            ></video>
            </div>

            {/* Playback Speed Control — placed UNDER the video */}
            <div className="playback-controls">
              <label htmlFor="speed">Speed:</label>
              <select
                id="speed"
                value={playbackRate}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                style={{ marginLeft: "8px" }}
              >
                <option value={0.5}>0.5x</option>
                <option value={0.75}>0.75x</option>
                <option value={1.0}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
                <option value={2.0}>2x</option>
              </select>
            </div>
          

          {/* Keywords */}
          <div className="keywords">
            <strong>Keywords:</strong> {currentVideo.keywords.join(", ")}
          </div>

          {/* Navigation Buttons */}
          <div className="carousel-nav">
            <button onClick={prevVideo}>&lt; Prev</button>
            <span>
              {currentIndex + 1} / {totalVideos}
            </span>
            <button onClick={nextVideo}>Next &gt;</button>
          </div>
        </div>
      </section>
    );
};

export default YorubaUseCasesCarousel;
