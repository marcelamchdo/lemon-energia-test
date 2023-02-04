import React, { useState } from 'react';
import { post, getAll } from '../api';
import './Form.css'

const Form = () => {
  const [connection, setConnection] = useState('monofasico');
  const [consumption, setConsumption] = useState('residencial');
  const [fee, setFee] = useState('branca');
  const [document, setDocument] = useState('');
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([current]);
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState({});
 
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
  const data = await post(toBackend)
  setResponse(data)

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
  <div className="form">
  <input
    type='text'
    value= {document}
    placeholder= 'Número do Documento'  
    onChange= {({target}) => setDocument(target.value)}
    className="input"
    />
  Tipo de conexão
  <select
    value = {connection}
    onChange = {({ target }) => setConnection(target.value) }
    className="select"
    >
    {['monofasico', 'bifasico', 'trifasico'].map((el, index) => options(el, index))}
  </select>
  Tipo de consumo
  <select
    value = {consumption}
    onChange = {({ target }) => setConsumption(target.value) }
    className="select"
    >
    {['residencial', 'industrial', 'comercial', 'rural', 'poderPublico'].map((el, index) => options(el, index))}
  </select>
  Modalidade Tarifária
  <select
    value = {fee}
    onChange = {({ target }) => setFee(target.value) }
    className="select"
    >
    {['azul', 'branca', 'verde', 'convencional'].map((el, index) => options(el, index))}
  </select>

  <button
      type='button'
      onClick={ () => handleClick()}
      disabled= {!enabled()}
      className="button"
      >
        Enviar
      </button>

  <button
    type='button'
    onClick={() => getUsers()}
    className="button"
    >
      Buscar cadastros
  </button>

  {history.map((el, index) => (index > 0 && <p key={index}>{el}</p>))}
  Consumo do mês
  <input
    type="number"
    onChange={({target}) => setCurrent(target.value)}
    className="input"
  />

  <button
  type="button"
  disabled={history.length > 12}
  onClick={validateConsumption}
  className="button"
  >
    Enviar consumo atual
  </button>

  {users.map((user, index) => printUserKeys(user, index))}

  {  !response.elegivel && (
    response.inegibility?.map((el, index) => (<p key={index}>{el}</p>) ))
  }

  </div>
  )
}

export default Form;