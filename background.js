// icons from Muhammad Haq at freeicons.io
// sound from user metrostock99 at freesound.org

console.log("hey there");

const audio = new Audio("sounds/oh-yeah.wav");

chrome.browserAction.onClicked.addListener(() => {
  audio.volume = 0.8;
  audio.play();

  chrome.browserAction.setIcon({
    path: {
      "16": "images/happy-active-16.png",
    },
  });

  audio.addEventListener("ended", function () {
    chrome.browserAction.setIcon({
      path: {
        "16": "images/happy-16.png",
      },
    });
  });
});
