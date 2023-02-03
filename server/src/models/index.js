import mongoose from "mongoose";

const model = mongoose.Schema({
  numeroDoDocumento: {
    type: String,
    required: true,
  },
  tipoDeConexao: {
    type: String,
    required: true,
    numof: ['monofasico', 'trifasico', 'bifasico']
  },
  classeDeConsumo: {
    type: String,
    required: true,
    numof: ['residencial', 'industrial', 'comercial', 'rural', 'poderPublico']
  },
  modalidadeTarifaria: {
    type: String,
    required: true,
    numof: ['azul', 'branca', 'verde', 'convencional']
  },
  historicoDeConsumo: {
    type: [Number],
    required: true,
  }
})

export default mongoose.model("Client", model);