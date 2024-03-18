import React, { useState } from 'react';
import "../styles/forms-css.css"
import AudioRecorder from "./AudioRecordingComponent";


type mercadoProps = {
  mercado: string;
  alimentacao: string;
  invdlucro: string;
  linha: string;
  varianteLinha: string;
  materialInvdlucro: string;
  frequencia: string;
  norma: string;
  detalhe1: string;
  detalhe2: string;
  tipoEnrolamento: string;
  potencia: string;
  polos: string;
  carcaça: string;
  carcaçaComercial: string;
  tensaoComCabo: string;
  tensaoSemCabo: string;
  numeroCabosLigacao: string;
  tipoProduto: string;
  especificacaoCliente: string;
}

function Formulario(props: mercadoProps) {

  const [dados, setDados] = useState({
    mercado: '',
    alimentacao: '',
    invdlucro: '',
    linha: '',
    varianteLinha: '',
    materialInvdlucro: '',
    frequencia: '',
    norma: '',
    detalhe1: '',
    detalhe2: '',
    tipoEnrolamento: '',
    potencia: '',
    polos: '',
    carcaça: '',
    carcaçaComercial: '',
    tensaoComCabo: '',
    tensaoSemCabo: '',
    numeroCabosLigacao: '',
    tipoProduto: '',
    especificacaoCliente: ''
  });

  const [audioResponse, setAudioResponse] = useState<any>('')

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDados(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para onde precisar, como uma API por exemplo
    console.log(dados);
  };

  return (
    <div>
  
     
      <form onSubmit={handleSubmit} className='formulario'>
      <div className='direita'>
        <label>Mercado:</label>
        <input type="text" name="mercado" value={props.mercado} onChange={handleChange} />
        
        <label>Alimentação:</label>
        <input type="text" name="alimentacao" value={props.alimentacao} onChange={handleChange} />
        
        <label>Invdlucro:</label>
        <input type="text" name="invdlucro" value={props.invdlucro} onChange={handleChange} />
        
        <label>Linha:</label>
        <input type="text" name="linha" value={props.linha} onChange={handleChange} />
        
        <label>Variante de Linha:</label>
        <input type="text" name="varianteLinha" value={props.varianteLinha} onChange={handleChange} />
      </div>

      <div>
        <label>Material Invdlucro:</label>
        <input type="text" name="materialInvdlucro" value={props.materialInvdlucro} onChange={handleChange} />
        
        <label>Frequência:</label>
        <input type="text" name="frequencia" value={props.frequencia} onChange={handleChange} />
        
        <label>Norma:</label>
        <input type="text" name="norma" value={props.norma} onChange={handleChange} />
        
        <label>Detalhe 1:</label>
        <input type="text" name="detalhe1" value={props.detalhe1} onChange={handleChange} />
        
        <label>Detalhe 2:</label>
        <input type="text" name="detalhe2" value={props.detalhe2} onChange={handleChange} />
      </div>

      <div>
      <label>Tipo de Enrolamento:</label>
      <input type="text" name="tipoEnrolamento" value={props.tipoEnrolamento} onChange={handleChange} />
      
      <label>Potência:</label>
      <input type="text" name="potencia" value={props.potencia} onChange={handleChange} />
      
      <label>Polos:</label>
      <input type="text" name="polos" value={props.polos} onChange={handleChange} />
      
      <label>Carcaça:</label>
      <input type="text" name="carcaça" value={props.carcaça} onChange={handleChange} />
      
      <label>Carcaça Comercial:</label>
      <input type="text" name="carcaçaComercial" value={props.carcaçaComercial} onChange={handleChange} />
      </div>

      <div>
      
      <label>Tensão com Cabo:</label>
      <input type="text" name="tensaoComCabo" value={props.tensaoComCabo} onChange={handleChange} />
      
      <label>Tensão sem Cabo:</label>
      <input type="text" name="tensaoSemCabo" value={props.tensaoSemCabo} onChange={handleChange} />
      
      <label>Número de Cabos Ligação:</label>
      <input type="text" name="numeroCabosLigacao" value={props.numeroCabosLigacao} onChange={handleChange} />
      
      <label>Tipo Produto:</label>
      <input type="text" name="tipoProduto" value={props.tipoProduto} onChange={handleChange} />

      <label>Especificação do Cliente:</label>
      <input type="text" name="especificacaoCliente" value={props.especificacaoCliente} onChange={handleChange} />
      
      <button type="submit">Enviar</button>
      </div>
     
    </form>
    </div>
  );
};

export default Formulario;
