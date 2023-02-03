import validateSchema from "../services/inputValidation.js"

const inputValidation = (req, res, next) => {
  console.log(req.body)
  const { error } = validateSchema(req.body);
  if (error) {
    return res.status(400).json({message: error.message})
  }
  next();
}

export default { inputValidation };