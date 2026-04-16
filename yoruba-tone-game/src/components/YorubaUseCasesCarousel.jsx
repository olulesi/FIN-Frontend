// src/components/YorubaUseCasesCarousel.jsx
import { useState, useRef, useEffect } from "react";
import "../styles/YorubaUseCasesCarousel.css";
import video1 from "../assets/videos/yoruba_useCase1.mp4";
import video2 from "../assets/videos/yoruba_useCase2.mp4";

  

const yorubaVideos = [
  {
    id: 1,
    src: video1,
    link: "https://youtu.be/9HKj4o4NrO0?si=_X120goKKiqXikhs",
  },
  {
    id: 2,
    src: video2,
    link: "https://youtu.be/s221c5GnkS4?si=MK1STAfrROxKzwhn",
  },
];

const YorubaUseCasesCarousel = () => {
  const audioRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const videoRef = useRef(null);

  const totalVideos = yorubaVideos.length; // This will be 2
  const currentVideo = yorubaVideos[currentIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % totalVideos);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
  };
    const handleSpeedChange = (e) => {
      const newSpeed = parseFloat(e.target.value);
      setSpeed(newSpeed);
      if (audioRef.current) {
        audioRef.current.playbackRate = newSpeed;
      }
    };

  // Reset video position when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  return (
    <section className="yoruba-use-cases">
      <hr />
      <h2 id="heading5">Yoruba Syncing and Echoing</h2>
      <p className="text-block tip">
        Uncut Yoruba people speaking in natural form, whether from film, comedy
        skits, or interviews.
      </p>

      <div className="carousel-container">
        {/* Video Title & Description */}
        <div className="video-info">
          <h3>{currentVideo.title}</h3>
          {currentVideo.description && <p>{currentVideo.description}</p>}
        </div>

        {/* Video Player */}
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={currentVideo.src}
            controls
            key={currentVideo.id} // Forces video to reload when changing
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="speed-dial-container">
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.25"
            value={speed}
            onChange={handleSpeedChange}
            className="speed-slider"
            aria-label="Playback Speed"
          />
          <div className="speed-label-tone">{speed}x</div>
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-nav">
          <button onClick={prevVideo} disabled={totalVideos <= 1}>
            &lt; Prev
          </button>
          <span>
            {currentIndex + 1} / {totalVideos}
          </span>
          <button onClick={nextVideo} disabled={totalVideos <= 1}>
            Next &gt;
          </button>
        </div>
        <button className="link-btn">
          <a href={currentVideo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
            >
            Link to full video subtitles
          </a>
        </button>
      </div>
      <hr />
    </section>
  );
};

export default YorubaUseCasesCarousel;
