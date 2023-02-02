import logo from './logo.svg';
import './App.css';
import post from './api'

function App() {

  const obj = { 
    numeroDoDocumento: "14041737706",
    tipoDeConexao: "bifasico",
    classeDeConsumo: "comercial",
    modalidadeTarifaria: "",
    historicoDeConsumo: [
      3878,
      9760,
      5976,
      2797,
      2483,
      5731,
      7538,
      4392,
      7859,
      4160,
      6941,
      4597
    ]
  }
  
  return (
    <div className="App">
      <button
      type='button'
      onClick={ () => post(obj)}>
        Enviar
      </button>
    </div>
  );
}

export default App;
