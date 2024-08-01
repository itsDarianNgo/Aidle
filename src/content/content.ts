chrome.runtime.sendMessage({ query: document.location.search }, response => {
  console.log("Received data:", response);
});
