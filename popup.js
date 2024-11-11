document.getElementById("saveBtn").addEventListener("click", () => {
    const interval = parseInt(document.getElementById("intervalInput").value);
    const enabled = document.getElementById("toggleQuotes").checked;
  
    chrome.storage.sync.set({ interval, enabled }, () => {
      document.getElementById("status").textContent = "Settings saved!";
      setTimeout(() => {
        document.getElementById("status").textContent = "";
      }, 2000);
  
      if (enabled) {
        chrome.alarms.create("showQuote", { periodInMinutes: interval });
      } else {
        chrome.alarms.clear("showQuote");
      }
    });
  });
  
  // Load settings on popup open
  chrome.storage.sync.get(["interval", "enabled"], (data) => {
    document.getElementById("intervalInput").value = data.interval || 5;
    document.getElementById("toggleQuotes").checked = data.enabled !== false;
  });
  