import "../styles/forms-css.css"
import { DadosAPI } from './interfaces';




type Props = {
  dados: DadosAPI
}

function Formulario(props: Props) {
  const { dados } = props

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
          <input type="text" name="mercado" value={dados.mercado} />

          <label>Alimentação:</label>
          <input type="text" name="alimentacao" value={dados.alimentacao} />

          <label>Invdlucro:</label>
          <input type="text" name="invdlucro" value={dados.involucro} />

          <label>Linha:</label>
          <input type="text" name="linha" value={dados.linha} />
        </div>

        <div>
          <label>Material Involucro:</label>
          <input type="text" name="materialInvdlucro" value={dados.materialInvolucro} />

          <label>Frequência:</label>
          <input type="text" name="frequencia" value={dados.frequencia} />
          <label>Detalhe 1:</label>
          <input type="text" name="detalhe1" value={dados.detalhe1} />
          <label>Detalhe 2:</label>
          <input type="text" name="detalhe2" value={dados.detalhe2} />
        </div>

        <div>
          <label>Tipo de Enrolamento:</label>
          <input type="text" name="tipoEnrolamento" value={dados.tipoEnrolamento} />

          <label>Potência:</label>
          <input type="text" name="potencia" value={dados.potencia} />
          <label>Polos:</label>
          <input type="text" name="polos" value={dados.polos} />
          <label>Carcaça:</label>
          <input type="text" name="carcaça" value={dados.carcaca} />
        </div>

        <div>
          <label>Norma:</label>
          <input type="text" name="norma" value={dados.norma} />
          <label>Tensão:</label>
          <input type="text" name="tensao" value={dados.tensao} />
          <label>Variante de linha:</label>
          <input type="text" name="varianteLinha" value={dados.varianteLinha} />

          <button type="submit">Enviar</button>
        </div>

      </form>
    </div>
  );
};

export default Formulario;
