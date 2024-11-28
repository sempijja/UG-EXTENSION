chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('dailyArticle', { periodInMinutes: 0 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'dailyArticle') {
      chrome.storage.local.set({ showPopup: true });
    }
  });
  
  chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.set({ showPopup: true });
  });