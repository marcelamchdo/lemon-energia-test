import React, { useState } from 'react';
import { post, getAll } from '../api';

const Form = () => {
  const [connection, setConnection] = useState('monofasico');
  const [consumption, setConsumption] = useState('residencial');
  const [fee, setFee] = useState('azul');
  const [document, setDocument] = useState('');
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([current])
  const [users, setUsers] = useState([])
 
  const options = (obj, index) => (<option key={index} value={obj}>{obj}</option>);
  
  const validateConsumption = () =>{
    if(current !== 0){
      setHistory([...history, current])
      setCurrent(0)
    }
  }
  
  const enabled = () => {
    return document.length === 11 && history.length === 13
  }

  const handleClick = async () => {
    setHistory(history.slice(1))
    const toBackend =  {
      numeroDoDocumento: document, 
      tipoDeConexao: connection, 
      classeDeConsumo: consumption,
      modalidadeTarifaria: fee,
      historicoDeConsumo: history.slice(1)
  }

  const posted = await post(toBackend)
  console.log(posted)
  }

  const getUsers = async () => {
    const response = await getAll()
    setUsers(response.data)
    users.forEach((i) => {
      console.log(i.numeroDoDocumento)
      console.log(i.tipoDeConexao)
      console.log(i.modalidadeTarifaria)
      console.log(i.classeDeConsumo)
    })
  }
  
  const printUserKeys = (user, index) => (
    <div key={index}>
    <p>{user.numeroDoDocumento}</p>
    <p>{user.tipoDeConexao}</p>
    <p>{user.modalidadeTarifaria}</p>
    <p>{user.classeDeConsumo}</p>
    </div>
  )

  return (
  <>
  {history.map((el, index) => (index > 0 && <p key={index}>{el}</p>))}
  <input
    type="number"
    onChange={({target}) => setCurrent(target.value)}
    />Consumo do mês
  <button
    type="button"
    disabled={history.length > 12}
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

  <button
    type='button'
    onClick={() => getUsers()}
    >
      Buscar cadastros
  </button>

  {users.map((user, index) => printUserKeys(user, index))}
  </>
  )
}

export default Form;