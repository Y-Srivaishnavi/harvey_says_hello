chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["interval", "enabled"], (data) => {
      if (data.enabled !== false) {
        chrome.alarms.create("showQuote", { periodInMinutes: data.interval || 5 });
      }
    });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "showQuote") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "showQuote" }).catch((error) => {
            console.warn("Content script not found on the active tab:", error);
          });
        }
      });
    }
  });
  