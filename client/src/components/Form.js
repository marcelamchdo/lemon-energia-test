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

  const options = (obj) => (<option value={obj}>{obj}</option>)


  return (
  <>
  Tipo de conexão
  <select
    value = {connection}
    onChange = {({ target }) => setConnection(target.value) }>
    {['monofasico', 'bifasico', 'trifasico'].map((el) => options(el))}
  </select>
  Tipo de consumo
  <select
    value = {consumption}
    onChange = {({ target }) => setConsumption(target.value) }>
    {['residencial', 'industrial', 'comercial', 'rural', 'poderPublico'].map((el) => options(el))}
  </select>
  Modalidade Tarifária
  <select
    value = {fee}
    onChange = {({ target }) => setFee(target.value) }>
    {['azul', 'branca', 'verde', 'convencional'].map((el) => options(el))}
  </select>
  </>
  )
}

export default Form;