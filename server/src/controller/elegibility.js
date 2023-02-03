// import validationClient from "../services/clientValidation.js";
import Model from "../models/index.js"

const elegibility = async (req, res) => {
  try {
    // const response = validationClient(req.body);
    // console.log(req.body)
    const newClient = new Model({
      numeroDoDocumento: req.body.numeroDoDocumento,
      tipoDeConexao: req.body.tipoDeConexao,
      classeDeConsumo: req.body.classeDeConsumo,
      modalidadeTarifaria: req.body.modalidadeTarifaria,
      historicoDeConsumo: req.body.historicoDeConsumo,
    })
    await newClient.save();
    return res.status(200).json(newClient);
  } catch (error) {
    console.log(error.stack)
  }

}

export default elegibility;