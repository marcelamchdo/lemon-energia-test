import Joi from "joi"

const schema = Joi.object({
  numeroDoDocumento: Joi.alternatives().try(
    Joi.string().pattern(/^\d{11}$/, 'cpf'),
    Joi.string().pattern(/^\d{14}$/, 'cnpj'),
  ).required()
  .messages({
    'alternatives.match': '"numeroDoDocumento" não corresponde à um "CPF" ou "CNPJ"',
    'any.required': '"numeroDoDocumento" é necessário',
  }),
  tipoDeConexao: Joi.string()
    .valid('monofasico', 'bifasico', 'trifasico')
    .required()
    .messages({
      'string.base': '"tipoDeConexao" deve ser uma "string"',
      'string.empty': '"tipoDeConexao" não pode ser um espaço vazio',
      'any.required': '"tipoDeConexao" é necessário',
    }),
  classeDeConsumo: Joi.string()
    .valid('residencial', 'industrial', 'comercial', 'rural', 'poderPublico')
    .required()
    .messages({
      'string.base': '"classesDeConsumo" deve ser uma "string"',
      'string.empty': '"classesDeConsumo" não pode ser um espaço vazio',
      'any.required': '"classesDeConsumo" é necessário',
    }),
  modalidadeTarifarias: Joi.string()
    .valid('azul', 'branca', 'verde', 'convencional')
    .required()
    .messages({
      'string.base': '"modalidadeTarifarias" deve ser uma "string"',
      'string.empty': '"modalidadeTarifarias" não pode ser um espaço vazio',
      'any.required': '"modalidadeTarifarias" é necessário',
    }),
  historicoDeConsumo: Joi.array()
    .required()
    .min(3)
    .max(12)
    .items(Joi.number()
      .integer()
      .max(9999)
      .min(0)),
});
  
const validateSchema = (object) => schema.validate(object);

export default validateSchema