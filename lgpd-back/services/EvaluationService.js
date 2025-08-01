import evaluationRepository from '../repositories/EvaluationRepository.js'; 


const saveEvaluation = (evaluationModel) => {
  return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
  return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluation = () => {
  return evaluationRepository.getAllEvaluation();
}

const updateEvaluation = (id, evaluationModel) => {
  return evaluationRepository.updateEvaluation(id, evaluationModel);
}



const deleteEvaluation = (id) => {
  return evaluationRepository.deleteEvaluation(id);
}

const services = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluation,
  updateEvaluation,
  deleteEvaluation
};

export default services;