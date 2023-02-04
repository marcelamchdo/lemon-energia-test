import validateSchema from "../services/inputValidation.js"

const inputValidation = (req, res, next) => {
  console.log(req.body)
  const { error } = validateSchema(req.body);
  if (error) {
    console.log('chegou aqui')
    return res.status(400).json({message: error.message})
  }
  next();
}

export default { inputValidation };