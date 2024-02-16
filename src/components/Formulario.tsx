import React, { useState } from 'react';
import "../styles/forms-css.css"

const Formulario = () => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para onde precisar, como uma API por exemplo
    console.log(dados);
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <div className='direita'>
        <label>Mercado:</label>
        <input type="text" name="mercado" value={dados.mercado} onChange={handleChange} />
        
        <label>Alimentação:</label>
        <input type="text" name="alimentacao" value={dados.alimentacao} onChange={handleChange} />
        
        <label>Invdlucro:</label>
        <input type="text" name="invdlucro" value={dados.invdlucro} onChange={handleChange} />
        
        <label>Linha:</label>
        <input type="text" name="linha" value={dados.linha} onChange={handleChange} />
        
        <label>Variante de Linha:</label>
        <input type="text" name="varianteLinha" value={dados.varianteLinha} onChange={handleChange} />
      </div>

      <div>
        <label>Material Invdlucro:</label>
        <input type="text" name="materialInvdlucro" value={dados.materialInvdlucro} onChange={handleChange} />
        
        <label>Frequência:</label>
        <input type="text" name="frequencia" value={dados.frequencia} onChange={handleChange} />
        
        <label>Norma:</label>
        <input type="text" name="norma" value={dados.norma} onChange={handleChange} />
        
        <label>Detalhe 1:</label>
        <input type="text" name="detalhe1" value={dados.detalhe1} onChange={handleChange} />
        
        <label>Detalhe 2:</label>
        <input type="text" name="detalhe2" value={dados.detalhe2} onChange={handleChange} />
      </div>

      <div>
      <label>Tipo de Enrolamento:</label>
      <input type="text" name="tipoEnrolamento" value={dados.tipoEnrolamento} onChange={handleChange} />
      
      <label>Potência:</label>
      <input type="text" name="potencia" value={dados.potencia} onChange={handleChange} />
      
      <label>Polos:</label>
      <input type="text" name="polos" value={dados.polos} onChange={handleChange} />
      
      <label>Carcaça:</label>
      <input type="text" name="carcaça" value={dados.carcaça} onChange={handleChange} />
      
      <label>Carcaça Comercial:</label>
      <input type="text" name="carcaçaComercial" value={dados.carcaçaComercial} onChange={handleChange} />
      </div>

      <div>
      
      <label>Tensão com Cabo:</label>
      <input type="text" name="tensaoComCabo" value={dados.tensaoComCabo} onChange={handleChange} />
      
      <label>Tensão sem Cabo:</label>
      <input type="text" name="tensaoSemCabo" value={dados.tensaoSemCabo} onChange={handleChange} />
      
      <label>Número de Cabos Ligação:</label>
      <input type="text" name="numeroCabosLigacao" value={dados.numeroCabosLigacao} onChange={handleChange} />
      
      <label>Tipo Produto:</label>
      <input type="text" name="tipoProduto" value={dados.tipoProduto} onChange={handleChange} />

      <label>Especificação do Cliente:</label>
      <input type="text" name="especificacaoCliente" value={dados.especificacaoCliente} onChange={handleChange} />
      
      <button type="submit">Enviar</button>
      </div>
     
    </form>
  );
};

export default Formulario;
