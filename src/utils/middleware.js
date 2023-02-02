import validateSchema from "../services/inputValidation.js"

const inputValidation = (req, res, next) => {
  const { error } = validateSchema(req.body);
  if (error) {
    return res.status(400).json({message: error.message})
  }
  next();
}

// const handleError = (err, _req, res, _next) => {
//   if (err.statusCode && err.message) {
//     const { statusCode, message } = err;
    
//     return res.status(statusCode).json({ message });
//   }

//   return res.status(500).json({ message: 'Internal Error' });
// };


export default { inputValidation };