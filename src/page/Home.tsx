import { useState } from "react";
import AudioRecorder from "../components/AudioRecordingComponent";
import Formulario from "../components/Formulario";
import { DadosAPI } from "../components/interfaces";
import Menu from "../components/Menu";

const addAudioElement = (blob: Blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

function Home() {

  const [dados, setDados] = useState<DadosAPI>({
    mercado: '',
    alimentacao: '',
    invdlucro: '',
    linha: '',
    materialInvdlucro: '',
    frequencia: '',
    norma: '',
    detalhe1: '',
    detalhe2: '',
    tipoEnrolamento: '',
    potencia: '',
    polos: '',
    carcaca: '',
    tensao: ''
  });
  return (
    <div>
      <Menu/>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        onReceiveAudioDados={dados => setDados(dados)}
        onNotAllowedOrFound={(err) => console.table(err)}
      // showVisualizer={true}
      // downloadOnSavePress
      // downloadFileExtension="mp3"
      //set....
      />
      <Formulario
        dados={dados}
      />

    </div>
  )
}
export default Home