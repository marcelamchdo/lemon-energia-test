import client from "../services/clientValidation.js";

const elegibility = (req, res) => {
  try {
    const response = client(req.body);
    // const response = 'teste';
    return res.status(200).json(response);
  } catch (error) {
    console.log(error.stack)
  }
}

export default elegibility;