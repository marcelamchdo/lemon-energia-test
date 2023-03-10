import React, { useState } from 'react';
import { post, getAll } from '../api';
import './Form.css'
import { cpf, cnpj } from 'cpf-cnpj-validator';


const Form = () => {
  const [connection, setConnection] = useState('monofasico');
  const [consumption, setConsumption] = useState('residencial');
  const [fee, setFee] = useState('branca');
  // const [document, setDocument] = useState('');
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([current]);
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState({});
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
 
  const options = (obj, index) => (<option key={index} value={obj}>{obj}</option>);
  
  const validateConsumption = () =>{
    if(current !== 0){
      setHistory([...history, current])
      setCurrent(0)
    }
  }

  const validateCNPJandCNPJ = (value) => {
    let error = null;
  
    if (!cpf.isValid(value) && value.length <= 11) {
      error = "CPF inválido";
    }

    if (!cnpj.isValid(value) && value.length > 11) {
      error = "CNPJ inválido";
    }
    return error;
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    const cpf = validateCNPJandCNPJ(event.target.value);

    if (cpf) {
      setError(cpf);
    } else {
      setError(null);
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
  <h2>Formulário de elegibilidade</h2>
  <p>
    Este é um formulário para checar a elegibilidade da sua empresa para ser cliente da Lemon Energia
  </p>
  Número do Documento
  <input
    type='text'
    value= {value}
    placeholder= 'Insira aqui o CPF ou CNPJ'  
    onChange= {handleChange}
    className="input"
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
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
  
  <div className="consumption">
    Consumo do mês
    <p>Insira aqui o histórico de consumo dos 12 últimos meses (número por número)</p>
    <div className="input-button">
      <input
        type="number"
        onChange={({target}) => setCurrent(target.value)}
        className="mounth"
      />

      <button
      type="button"
      disabled={history.length > 12}
      onClick={validateConsumption}
      className="buttonConsum"
      >
        Enviar
      </button>
    </div>
    <div className="numbers">
      {history.map((el, index) => (index > 0 && <p key={index}>{el} |</p>))}
    </div>
  </div>

  <div className="buttons-finally">
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
  </div>

  {users.map((user, index) => printUserKeys(user, index))}

  {!response.elegivel && response.inegibility?.map((el, index) => (<p key={index} className="response">{el}</p>))}
  {response.elegivel && (<p key={1} className="response">{`Elegível! Economia anual de CO2: ${Number(response.economiaAnualDeCO2).toFixed(2)}`}</p>) }
  </div>
  )
}

export default Form;