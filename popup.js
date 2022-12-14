document.addEventListener('DOMContentLoaded', function () {
    // Get button by ID
    var button = document.getElementById('newMessageButton');
    button.onclick = injectScript;
});

async function injectScript() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['alert.js']
    });
    window.close();
}

