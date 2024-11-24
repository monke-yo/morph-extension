document.addEventListener("DOMContentLoaded", () => {
  const enableSounds = document.getElementById("enableSounds");
  const volumeControl = document.getElementById("volumeControl");
  const optionsButton = document.getElementById("optionsButton");

  // Load settings
  chrome.storage.sync.get(["enabled", "volume"], (settings) => {
    enableSounds.checked = settings.enabled;
    volumeControl.value = settings.volume;
  });

  // Save settings when changed
  enableSounds.addEventListener("change", () => {
    chrome.storage.sync.set({ enabled: enableSounds.checked });
  });

  volumeControl.addEventListener("input", () => {
    chrome.storage.sync.set({ volume: parseFloat(volumeControl.value) });
  });

  optionsButton.addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });
});
