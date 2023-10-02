console.log("i don enter");

var recorder = null;
var chunks = [];
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start(2000);

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  let controlsContainer = document.createElement("div");
  controlsContainer.style.display = "flex";
  controlsContainer.style.padding = "12px 20px";
  controlsContainer.style.fontFamily = "Work Sans";
  controlsContainer.style.columnGap = "24px";
  controlsContainer.style.borderRadius = "200px";
  controlsContainer.style.background = "#141414";
  controlsContainer.style.color = "white";

  controlsContainer.style.minWidth = "fit";
  controlsContainer.style.position = "fixed";
  controlsContainer.style.bottom = "5%";
  controlsContainer.style.left = "5%";

  let time = document.createElement("div");
  let timeP = document.createElement("small");
  let timeSpan = document.createElement("img");
  time.style.padding = "16px";
  time.style.borderRight = "1px solid grey";
  time.style.display = "flex";
  time.style.alignItems = "center";
  time.style.columnGap = "12px";
  timeP.style.color = "#fff";
  timeP.textContent = "00:03:35";
  timeSpan.src = "https://www.linkpicture.com/q/recording.svg";
  time.appendChild(timeP);
  time.appendChild(timeSpan);
  controlsContainer.appendChild(time);
  let controlItemsContainer = document.createElement("div");
  controlItemsContainer.style.display = "flex";
  controlItemsContainer.style.alignItems = "start";
  controlItemsContainer.style.columnGap = "24px";
  controlItemsContainer.style.fontSize = "12px";
  controlItemsContainer.style.fontWeight = "500";

  document.body.appendChild(controlsContainer);
  const pauseItem = document.createElement("div");
  pauseItem.style.display = "flex";
  pauseItem.style.alignItems = "center";
  pauseItem.style.rowGap = "4px";
  pauseItem.style.flexDirection = "column";

  const pauseImg = document.createElement("img");
  pauseImg.src = "https://www.linkpicture.com/q/pause.svg";
  pauseItem.appendChild(pauseImg);
  const pauseLabel = document.createElement("small");

  pauseLabel.textContent = "Pause";
  pauseLabel.style.fontFamily = "Work Sans";
  pauseItem.appendChild(pauseLabel);

  const stopItem = document.createElement("div");
  stopItem.style.display = "flex";
  stopItem.style.alignItems = "center";
  stopItem.style.rowGap = "4px";
  stopItem.style.flexDirection = "column";
  const stopImg = document.createElement("img");

  stopImg.src = "https://www.linkpicture.com/q/stop.svg";
  stopItem.appendChild(stopImg);
  const stopLabel = document.createElement("small");

  stopLabel.textContent = "Stop";
  stopLabel.style.fontFamily = "Work Sans";
  stopItem.appendChild(stopLabel);
  const cameraItem = document.createElement("div");
  cameraItem.style.display = "flex";
  cameraItem.style.alignItems = "center";
  cameraItem.style.rowGap = "4px";
  cameraItem.style.flexDirection = "column";

  const cameraImg = document.createElement("img");
  cameraImg.src = "https://www.linkpicture.com/q/camera.svg";
  cameraItem.appendChild(cameraImg);
  const cameraLabel = document.createElement("small");

  cameraLabel.textContent = "Camera";
  cameraLabel.style.fontFamily = "Work Sans";
  cameraItem.appendChild(cameraLabel);

  const micItem = document.createElement("div");
  micItem.style.display = "flex";
  micItem.style.alignItems = "center";
  micItem.style.rowGap = "4px";
  micItem.style.flexDirection = "column";

  const micImg = document.createElement("img");
  micImg.src = "https://www.linkpicture.com/q/mic.svg";
  micItem.appendChild(micImg);
  const micLabel = document.createElement("small");
  micLabel.textContent = "Mic";
  micLabel.style.fontFamily = "Work Sans";
  micItem.appendChild(micLabel);

  const deleteItem = document.createElement("div");
  const deleteImg = document.createElement("img");
  deleteImg.src = "https://www.linkpicture.com/q/delete.svg";
  deleteItem.appendChild(deleteImg);

  controlItemsContainer.appendChild(pauseItem);
  controlItemsContainer.appendChild(stopItem);
  controlItemsContainer.appendChild(cameraItem);
  controlItemsContainer.appendChild(micItem);
  controlItemsContainer.appendChild(deleteItem);
  controlsContainer.appendChild(controlItemsContainer);

  stopItem.addEventListener("click", () => {
    if (!recorder) return console.log("No recorder");
    controlsContainer.style.display = "none";
    recorder.stop();
    // let a = document.createElement("a");
    // a.href = "http://localhost:5173/";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  });

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    console.log(recordedBlob);
    chunks.push(event.data);
    console.log(chunks);

    const reader = new FileReader();

    reader.onload = function () {
      const base64 = reader.result;
      console.log("Base 64 encoded video:", base64);

      chrome.runtime.sendMessage({
        message: "recordedblob",
        blob: base64,
      });
    };

    reader.readAsDataURL(recordedBlob);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);

    if (!recorder) return console.log("no recorder");
    sendArrayBuffer();
    recorder.stop();
  }
});
//https://helpmeout-e2c4.onrender.com/

function sendArrayBuffer() {
  const backendUrl = "https://helpmeout-e2c4.onrender.com/file/save";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
    },
    body: {},
  };
  fetch(backendUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
