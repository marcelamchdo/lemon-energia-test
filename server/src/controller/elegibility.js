import validationClient from "../services/clientValidation.js";
import Model from "../models/index.js"

const elegibility = async (req, res) => {
    const response = validationClient(req.body);

    const newClient = new Model({
      numeroDoDocumento: req.body.numeroDoDocumento,
      tipoDeConexao: req.body.tipoDeConexao,
      classeDeConsumo: req.body.classeDeConsumo,
      modalidadeTarifaria: req.body.modalidadeTarifaria,
      historicoDeConsumo: req.body.historicoDeConsumo,
    })

    await newClient.save();
    return res.status(200).json(response);
}

const getAll = async (req, res) => {
  try {
    const clients = await Model.find()
    return res.status(200).json(clients)
  } catch (error) {
    console.log(error.stack)
    return res.status(500).json('Nenhum usuário foi encontrado')
  }
}

export default { elegibility, getAll };