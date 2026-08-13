// song.js
// Song list — audio files are in the root folder of the website

const songs = [
  {
    id: 1,
    title: "Baja Sanai Aar Baja Re Dhol",
    artist: "",
    src: "./Baja_Sanai_Aar_Baja_Re_Dhol.mp3"
  },
  {
    id: 2,
    title: "Dugga Elo",
    artist: "",
    src: "./Dugga_Elo.mp3"
  },
  {
    id: 3,
    title: "Dugga Ma",
    artist: "",
    src: "./Dugga_Ma.mp3"
  },
  {
    id: 4,
    title: "Ebar Jeno Onno Rokom Pujo",
    artist: "",
    src: "./Ebar_Jeno_Onno_Rokom_Pujo.mp3"
  },
  {
    id: 5,
    title: "Shundori Komola",
    artist: "",
    src: "./Shundori_Komola.mp3"
  }
];

// Export for use in other files (works with plain <script> tags too,
// since `songs` will just be a global variable if you don't use modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = songs;
}
