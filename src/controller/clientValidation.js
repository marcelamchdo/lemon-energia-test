import elegibility from '../services/clientValidation.js';

const elegibilityController = (req, res, next) => {
  try {
    const response = elegibility(req.body);
    return res.status(200).json(response);
  } catch (error) {
    next (error);
  }
}

// const getAll = (req, res) => {
//   return res.status(200).json('chegou aqui')
// }

export default elegibilityController;