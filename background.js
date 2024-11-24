chrome.runtime.onInstalled.addListener(() => {
  // Set default settings
  chrome.storage.sync.set({
    enabled: true,
    volume: 0.5,
    soundFile: "sounds/click.mp3",
  });
});
