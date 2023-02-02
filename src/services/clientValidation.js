const classes = ['residencial', 'industrial', 'comercial']

const modalidades = ['branca', 'convencional']

const { tipoDeConexao, historicoDeConsumo } = input;

const consumption = (input) => {
  const minValue = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 450,
  }

  const average = (value) => {
    value.reduce((acc, cur) => acc + cur, 0) / value.length; 
    return average > minValue[tipoDeConexao];
  }
}
 
const elegibility = (input) => {
  const inegibility = [];

  if (!classes.includes(input.classeDeConsumo)) {
    inegibility.push('Sua classe de consumo não é válida!');
  }
  if(!modalidades.includes(input.modalidadeTarifaria)) {
    inegibility.push('Sua modalidade tarifária não é válida!');
  }
  if(!consumption(input)) {
    inegibility.push('Seu valor de consumo não é válido!');
  }
  if(inegibility > 0) {
    return { elegível: false, inegibility };
  }
}

export default elegibility;

