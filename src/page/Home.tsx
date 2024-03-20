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
    frequencia: '',
    involucro: '',
    materialInvolucro: '',
    tipoEnrolamento: '',
    potencia: '',
    polos: '',
    tensao: '',
    norma: '',
    varianteLinha: '',
    carcaca: '',
    linha: '',
    detalhe1: '',
    detalhe2: ''
  });
  return (
    <div>
      <Menu/>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        setDados={setDados}
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