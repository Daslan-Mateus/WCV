import AudioRecorder from "./components/AudioRecordingComponent";
import Formulario from "./components/Formulario";

const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

function App () {
    return(
        <div>
            <AudioRecorder 
              onRecordingComplete={(blob) => addAudioElement(blob)}
              onNotAllowedOrFound={(err) => console.table(err)}
              // showVisualizer={true}
              // downloadOnSavePress
              // downloadFileExtension="mp3"
              //set....
            />
            <Formulario 
            mercado="Europa"
            alimentacao="Trifasico"
            invdlucro="Fechado"
            linha="W22"
            varianteLinha="Sem variante" 
            materialInvdlucro="Ferro"
            frequencia="60Hz"
            norma="IEC"
            detalhe1="Nehum"
            detalhe2="IE3"
            tipoEnrolamento="Nenhum"
            potencia="10HP"
            polos="4"
            carcaça="225"
            carcaçaComercial="225L"
            tensaoComCabo="440V 3"
            tensaoSemCabo="440V"
            numeroCabosLigacao="3"
            tipoProduto="P/O"
            especificacaoCliente="Nenhum"
            />

        </div>
    )
}
export default App