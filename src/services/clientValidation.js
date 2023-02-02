const classes = ['residencial', 'industrial', 'comercial']

const modalidades = ['branca', 'convencional']

const consumption = (validateSchema) => {
  const minValue = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 450,
  }
  
  const { tipoDeConexao, historicoDeConsumo } = validateSchema;

  const sumConsumption = historicoDeConsumo.reduce((acc, curr) => acc + curr, 0);
  const average = sumConsumption / historicoDeConsumo.length;
  return average > minValue[tipoDeConexao];
}
 
const client = (validateSchema) => {
  const inegibility = [];

  if (!classes.includes(validateSchema.classeDeConsumo)) {
    inegibility.push('Sua classe de consumo não é válida!');
  }
  if(!modalidades.includes(validateSchema.modalidadeTarifaria)) {
    inegibility.push('Sua modalidade tarifária não é válida!');
  }
  if(!consumption(validateSchema)) {
    inegibility.push('Seu valor de consumo não é válido!');
  }
  if(inegibility > 0) {
    return { elegível: false, inegibility };
  }

  const anualEconomy = (validateSchema.historicoDeConsumo.reduce((acc, curr) => acc + curr, 0) / 1000) * 84;
  return { elegível: true, economiaAnualDeCO2: anualEconomy };
}

export default client;

