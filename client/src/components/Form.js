import React, { useState } from 'react';

// numeroDoDocumento: "14041737706",
// tipoDeConexao: "bifasico",
// classeDeConsumo: "comercial",
// modalidadeTarifaria: "branca",
// historicoDeConsumo: [
//   3878,
//   9760,
//   5976,
//   2797,
//   2483,
//   5731,
//   7538,
//   4392,
//   7859,
//   4160,
//   6941,
//   4597
// ]

const Form = () => {
  const [connection, setConnection] = useState('monofasico');
  const [consumption, setConsumption] = useState('residencial');
  const [fee, setFee] = useState('azul');
  const [document, setDocument] = useState('');
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([current])
 
  const options = (obj, index) => (<option key={index} value={obj}>{obj}</option>);
  
  const validateConsumption = () =>{
    if(current !== 0){
      setHistory([...history, current])
    }
    setCurrent(0)
  }
  
  const enabled = () => {
    return document.length > 10 && history.length > 4
  }

  const handleClick = () => {
    setHistory(history.slice(1))
    const toBackend =  {
      numeroDoDocumento: document, 
      tipoDeConexao: connection, 
      classeDeConsumo: consumption,
      modalidadeTarifaria: fee,
      historicoDeConsumo: history.slice(1)
  }
  console.log(toBackend);

  }
  
  return (
  <>
  {/* {history.map((el, index) => (index >0 && <p>{el}</p>))} */}
  {history.map((el, index) => (<p key={index}>{el}</p>))}
  <input
    type="number"
    onChange={({target}) => setCurrent(target.value)}
    />Consumo do mês
  <button
    type="button"
    onClick={validateConsumption}
    >
      Enviar consumo atual
  </button>

  <input
    type='text'
    value= {document}
    placeholder= 'Número do Documento'  
    onChange= {({target}) => setDocument(target.value)}/>
  Tipo de conexão
  <select
    value = {connection}
    onChange = {({ target }) => setConnection(target.value) }>
    {['monofasico', 'bifasico', 'trifasico'].map((el, index) => options(el, index))}
  </select>
  Tipo de consumo
  <select
    value = {consumption}
    onChange = {({ target }) => setConsumption(target.value) }>
    {['residencial', 'industrial', 'comercial', 'rural', 'poderPublico'].map((el, index) => options(el, index))}
  </select>
  Modalidade Tarifária
  <select
    value = {fee}
    onChange = {({ target }) => setFee(target.value) }>
    {['azul', 'branca', 'verde', 'convencional'].map((el, index) => options(el, index))}
  </select>

  <button
      type='button'
      onClick={ () => handleClick()}
      disabled= {!enabled()}
      >
        Enviar
      </button>
  </>
  )
}

export default Form;