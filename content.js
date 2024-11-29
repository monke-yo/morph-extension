// Default sound settings
let soundSettings = {
  enabled: true,
  volume: 0.5,
  soundFile: "click.mp3",
};

// Load user settings from storage
chrome.storage.sync.get(["enabled", "volume", "soundFile"], (settings) => {
  soundSettings = { ...soundSettings, ...settings };
});

// Listen for keydown events
document.addEventListener("keydown", () => {
  if (soundSettings.enabled) {
    playKeySound();
  }
});

// Function to play the sound
function playKeySound() {
  const audio = new Audio(
    chrome.runtime.getURL(`sounds/${soundSettings.soundFile}`)
  );
  audio.volume = soundSettings.volume;
  audio.play().catch((err) => console.error("Error playing sound:", err));
}
