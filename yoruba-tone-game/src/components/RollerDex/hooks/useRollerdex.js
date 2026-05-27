import { useState, useRef, useEffect } from "react";

export const useRollerdex = (songs) => {
  // ALL YOUR ORIGINAL STATE - EXACTLY THE SAME
  const [showLyricsContainer, setShowLyricsContainer] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const audioRef = useRef(null);
  const lyricsTextRef = useRef(null);

  // ALL YOUR ORIGINAL useEffect - EXACTLY THE SAME
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // ALL YOUR ORIGINAL FUNCTIONS - EXACTLY THE SAME
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  
  const handleCardClick = (song, index) => {
    setSelectedSong(song);
    setSelectedSongIndex(index);
    setShowLyricsContainer(true);

    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.src = song.audioFile;
      audioRef.current.load();
      audioRef.current.playbackRate = playbackSpeed;
      setIsPlaying(false);
      setCurrentTime(0);

      if (wasPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Auto-play failed:", err));
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !selectedSong) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
        alert(`Cannot play: ${err.message}`);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const skipBack = () => {
    if (!selectedSong) return;
    const newIndex =
      selectedSongIndex > 0 ? selectedSongIndex - 1 : songs.length - 1;
    handleCardClick(songs[newIndex], newIndex);
  };

  const skipForward = () => {
    if (!selectedSong) return;
    const newIndex =
      selectedSongIndex < songs.length - 1 ? selectedSongIndex + 1 : 0;
    handleCardClick(songs[newIndex], newIndex);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleSongEnded = () => {
    skipForward();
  };

  const handleSliderChange = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) audioRef.current.currentTime = newTime;
  };

  const handlePlaybackSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setPlaybackSpeed(newSpeed);
  };

  const handleCloseContainer = () => {
    setShowLyricsContainer(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseDown = (e) => {
    if (lyricsTextRef.current) {
      setIsDragging(true);
      setStartY(e.clientY);
      setScrollTop(lyricsTextRef.current.scrollTop);
      lyricsTextRef.current.style.cursor = "grabbing";
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !lyricsTextRef.current) return;
    const deltaY = e.clientY - startY;
    lyricsTextRef.current.scrollTop = scrollTop - deltaY;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (lyricsTextRef.current) {
      setIsDragging(false);
      lyricsTextRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging && lyricsTextRef.current) {
      setIsDragging(false);
      lyricsTextRef.current.style.cursor = "grab";
    }
  };

  const handleListenFullSong = () => {
    if (selectedSong) {
      window.open(selectedSong.link, "_blank", "noopener,noreferrer");
    }
  };

  // RETURN EVERYTHING THE COMPONENT NEEDS
  return {
    // State
    showLyricsContainer,
    selectedSong,
    selectedSongIndex,
    isPlaying,
    currentTime,
    duration,
    playbackSpeed,
    audioRef,
    lyricsTextRef,
    songs,

    // Handlers - EXACT NAMES as original
    handleCardClick,
    togglePlay,
    skipBack,
    skipForward,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSongEnded,
    handleSliderChange,
    handlePlaybackSpeedChange,
    handleCloseContainer,
    handleListenFullSong,
    formatTime,

    // Drag handlers
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  };
};