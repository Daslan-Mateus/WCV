import React, { useState, useEffect, ReactElement, Suspense } from "react";
import { DadosAPI, Props } from "./interfaces";
import useAudioRecorder from "../hooks/useAudioRecorder";
import "../styles/audio-recorder.css";
import { saveAudio } from "../api";

import micSVG from "../icons/mic.svg";
import pauseSVG from "../icons/pause.svg";
import resumeSVG from "../icons/play.svg";
import saveSVG from "../icons/save.svg";
import discardSVG from "../icons/stop.svg";




const LiveAudioVisualizer = React.lazy(async () => {
  const { LiveAudioVisualizer } = await import("react-audio-visualize");
  return { default: LiveAudioVisualizer };
});


const AudioRecorder: (props: Props) => ReactElement = ({
  onRecordingComplete,
  dados,
  setDados,
  onNotAllowedOrFound,
  recorderControls,
  audioTrackConstraints,
  downloadOnSavePress = false,
  downloadFileExtension = "webm",
  showVisualizer = false,
  mediaRecorderOptions,
  classes,
  //setAudioResponse
}: Props) => {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } =
    recorderControls ??
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAudioRecorder(
      audioTrackConstraints,
      onNotAllowedOrFound,
      mediaRecorderOptions
    );

  const [shouldSave, setShouldSave] = useState(false);


  const stopAudioRecorder: (save?: boolean) => void = (
    save: boolean = true
  ) => {
    setShouldSave(save);
    stopRecording();
  };

  const convertToDownloadFileExtension = async (
    webmBlob: Blob
  ): Promise<Blob> => {
    const FFmpeg = await import("@ffmpeg/ffmpeg");
    const ffmpeg = FFmpeg.createFFmpeg({ log: false });
    await ffmpeg.load();

    const inputName = "input.webm";
    const outputName = `output.${downloadFileExtension}`;

    ffmpeg.FS(
      "writeFile",
      inputName,
      new Uint8Array(await webmBlob.arrayBuffer())
    );

    await ffmpeg.run("-i", inputName, outputName);

    const outputData = ffmpeg.FS("readFile", outputName);
    const outputBlob = new Blob([outputData.buffer], {
      type: `audio/${downloadFileExtension}`,
    });

    return outputBlob;
  };

  const downloadBlob = async (blob: Blob): Promise<void> => {
    if (!crossOriginIsolated && downloadFileExtension !== "webm") {
      console.warn(
        `This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"`
      );
    }

    const downloadBlob = crossOriginIsolated
      ? await convertToDownloadFileExtension(blob)
      : blob;
    const fileExt = crossOriginIsolated ? downloadFileExtension : "webm";
    const url = URL.createObjectURL(downloadBlob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `audio.${fileExt}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  
  const fetchAndSetAudioDados = async (audioBase64: string) => {
    const audioDados = await saveAudio(audioBase64)
    setDados({...dados,
      mercado: audioDados.mercado ??"",
      alimentacao: audioDados.alimentacao??"",
      frequencia: audioDados.frequencia??"",
      involucro: audioDados.involucro??"",
      materialInvolucro: audioDados.materialInvolucro??"",
      tipoEnrolamento: audioDados.tipoEnrolamento??"",
      potencia: audioDados.potencia??"",
      polos: audioDados.polos??"",
      tensao: audioDados.tensao??"",
      norma: audioDados.norma??"",
      varianteLinha: audioDados.varianteLinha??"",
      carcaca: audioDados.carcaca??"",
      linha: audioDados.linha??"",
      detalhe1: audioDados.detalhe1??"",
      detalhe2: audioDados.detalhe2??""
    })//verificar se sim, verificar o valor de "dados"
    return audioDados
  };

  useEffect(() => {
    if ((shouldSave || recorderControls) && recordingBlob != null && onRecordingComplete != undefined) {
      onRecordingComplete(recordingBlob);

      const fr = new FileReader();
      fr.readAsDataURL(new Blob([recordingBlob], { type: 'audio/wav' }));

      fr.addEventListener('load', () => {
        let base64DataUrl = fr.result as string;
        base64DataUrl = base64DataUrl.replace('data:audio/wav;base64,', '');
        // console.log(base64DataUrl);

        fetchAndSetAudioDados(base64DataUrl)


        if (downloadOnSavePress) {
          void downloadBlob(recordingBlob);
        }
      });

    }
  }, [recordingBlob]);

  return (


    <div
      className={`audio-recorder ${isRecording ? "recording" : ""} ${classes?.AudioRecorderClass ?? ""
        }`}
      data-testid="audio_recorder"
    >
      <img
        src={isRecording ? saveSVG : micSVG}
        className={`audio-recorder-mic ${classes?.AudioRecorderStartSaveClass ?? ""
          }`}
        onClick={isRecording ? () => stopAudioRecorder() : startRecording}
        data-testid="ar_mic"
        title={isRecording ? "Save recording" : "Start recording"}
      />
      <span
        className={`audio-recorder-timer ${!isRecording ? "display-none" : ""
          } ${classes?.AudioRecorderTimerClass ?? ""}`}
        data-testid="ar_timer"
      >
        {Math.floor(recordingTime / 60)}:
        {String(recordingTime % 60).padStart(2, "0")}
      </span>
      {showVisualizer ? (
        <span
          className={`audio-recorder-visualizer ${!isRecording ? "display-none" : ""
            }`}
        >
          {mediaRecorder && (
            <Suspense fallback={<></>}>
              <LiveAudioVisualizer
                mediaRecorder={mediaRecorder}
                barWidth={2}
                gap={2}
                width={140}
                height={30}
                fftSize={512}
                maxDecibels={-10}
                minDecibels={-80}
                smoothingTimeConstant={0.4}
              />
            </Suspense>
          )}
        </span>
      ) : (
        <span
          className={`audio-recorder-status ${!isRecording ? "display-none" : ""
            } ${classes?.AudioRecorderStatusClass ?? ""}`}
        >
          <span className="audio-recorder-status-dot"></span>
          Recording
        </span>
      )}
      <img
        src={isPaused ? resumeSVG : pauseSVG}
        className={`audio-recorder-options ${!isRecording ? "display-none" : ""
          } ${classes?.AudioRecorderPauseResumeClass ?? ""}`}
        onClick={togglePauseResume}
        title={isPaused ? "Resume recording" : "Pause recording"}
        data-testid="ar_pause"
      />
      <img
        src={discardSVG}
        className={`audio-recorder-options ${!isRecording ? "display-none" : ""
          } ${classes?.AudioRecorderDiscardClass ?? ""}`}
        onClick={() => stopAudioRecorder(false)}
        title="Discard Recording"
        data-testid="ar_cancel"
      />
    </div>

  );
};

export default AudioRecorder;