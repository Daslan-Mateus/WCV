import { useEffect } from "react";
import "../styles/forms-css.css"
import { DadosAPI } from './interfaces';




type Props = {
  dados: DadosAPI
}

function Formulario(props: Props) {
  const { dados } = props

  function handleClick(e: any) {
    e.preventDefault();
      console.log('O aúdio foi gravado');
}

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para onde precisar, como uma API por exemplo
    console.log(dados);
  };

  useEffect(()=> {console.log("audio: ", dados)},[dados])

  return (
    <div>


      <form onSubmit={handleSubmit} className='formulario'>
        <div className='direita'>
          <label>Mercado:</label>
          <input type="text" name="mercado" value={dados.mercado} onChange={handleClick}/>

          <label>Alimentação:</label>
          <input type="text" name="alimentacao" value={dados.alimentacao} onChange={handleClick}/>

          <label>Involucro:</label>
          <input type="text" name="invdlucro" value={dados.involucro} onChange={handleClick}/>

          <label>Linha:</label>
          <input type="text" name="linha" value={dados.linha} />
        </div>

        <div>
          <label>Material Involucro:</label>
          <input type="text" name="materialInvdlucro" value={dados.materialInvolucro} onChange={handleClick}/>

          <label>Frequência:</label>
          <input type="text" name="frequencia" value={dados.frequencia} onChange={handleClick}/>
          <label>Detalhe 1:</label>
          <input type="text" name="detalhe1" value={dados.detalhe1} onChange={handleClick}/>
          <label>Detalhe 2:</label>
          <input type="text" name="detalhe2" value={dados.detalhe2} onChange={handleClick}/>
        </div>

        <div>
          <label>Tipo de Enrolamento:</label>
          <input type="text" name="tipoEnrolamento" value={dados.tipoEnrolamento} onChange={handleClick}/>

          <label>Potência:</label>
          <input type="text" name="potencia" value={dados.potencia} onChange={handleClick}/>
          <label>Polos:</label>
          <input type="text" name="polos" value={dados.polos} onChange={handleClick}/>
          <label>Carcaça:</label>
          <input type="text" name="carcaça" value={dados.carcaca} onChange={handleClick}/>
        </div>

        <div>
          <label>Norma:</label>
          <input type="text" name="norma" value={dados.norma} onChange={handleClick}/>
          <label>Tensão:</label>
          <input type="text" name="tensao" value={dados.tensao} onChange={handleClick}/>
          <label>Variante de linha:</label>
          <input type="text" name="varianteLinha" value={dados.varianteLinha} onChange={handleClick}/>

          <button type="submit">Enviar</button>
        </div>

      </form>
    </div>
  );
};

export default Formulario;
