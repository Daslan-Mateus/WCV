import React from "react";
import ReactDOM from "react-dom/client";
import AudioRecorder from "./components/AudioRecordingComponent";

const addAudioElement = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);

//   const fr = new FileReader();
//   fr.readAsDataURL(new Blob([url], { type: 'audio/wav' }));
//   fr.addEventListener('load', () => {
//     console.log(fr.result);
//     // data:application/json;base64,eyJuYW1lIjoiVXNlciIsIm9jY3VwYXRpb24iOiJBIFVzZXIiLCJhZGRyZXNzIjoiMSBVc2VyIFJvYWQifQ==
// });

};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AudioRecorder 
      onRecordingComplete={(blob) => addAudioElement(blob)}
      onNotAllowedOrFound={(err) => console.table(err)}
      // showVisualizer={true}
      downloadOnSavePress
      // downloadFileExtension="mp3"
    />
  </React.StrictMode>
);