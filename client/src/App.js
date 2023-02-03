import './App.css';
import post from './api'
import Form from './components/Form';

function App() {

  const obj = { 
    numeroDoDocumento: "14041737706",
    tipoDeConexao: "bifasico",
    classeDeConsumo: "comercial",
    modalidadeTarifaria: "branca",
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
      <Form />

    </div>
  );
}

export default App;
