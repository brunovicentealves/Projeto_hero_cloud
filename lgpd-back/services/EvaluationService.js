import evaluationRepository from '../repositories/EvaluationRepository.js'; 


const saveEvaluation = (evaluationModel) => {
  return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
  return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
  return evaluationRepository.getAllEvaluations();
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
  getAllEvaluations,
  updateEvaluation,
  deleteEvaluation
};

export default services;