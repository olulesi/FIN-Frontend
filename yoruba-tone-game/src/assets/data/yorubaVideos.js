const links = [
  'https://youtu.be/9HKj4o4NrO0?si=_X120goKKiqXikhs',
  'https://youtu.be/s221c5GnkS4?si=MK1STAfrROxKzwhn',
];

export const getSyncingVideos = (videosBaseUrl) =>
  links.map((link, i) => ({
    id: i + 1,
    src: `${videosBaseUrl}/yoruba_useCase${i + 1}.mp4`,
    link,
  }));