document.addEventListener("DOMContentLoaded", () => {
  const soundFileSelect = document.getElementById("soundFile");
  const saveButton = document.getElementById("saveButton");

  // Load current settings
  chrome.storage.sync.get(["soundFile"], (settings) => {
    soundFileSelect.value = settings.soundFile || "click.mp3";
  });

  // Save new settings
  saveButton.addEventListener("click", () => {
    chrome.storage.sync.set({ soundFile: soundFileSelect.value }, () => {
      alert("Settings saved!");
    });
  });
});
