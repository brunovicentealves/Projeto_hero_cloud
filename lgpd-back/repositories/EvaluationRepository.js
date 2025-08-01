import Evaluation from '../models/Evaluation.js';

const saveEvaluation = async (evaluationModel) => {
  return await Evaluation.create(evaluationModel);
}

const getEvaluationById = async (id) => {
  return await Evaluation.findByPk(id);
}

const getAllEvaluations = async () => {
  return await Evaluation.findAll({
    order: [['id', 'ASC']]
  });
}

const updateEvaluationById = async (id, evaluationModel) => {

  try {
    const result = await Evaluation.update(evaluationModel, {
    where: { id: id }
  });
  if(result[0] === 1) {
    return {message :"Usuário atualizado com sucesso!"};
  }else {
    return {message: "Usuário não encontrado!",status: 404};
  }
    
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }

}

const deleteEvaluation = async (id) => {
  return await Evaluation.destroy({
    where: { id:id }
  });
}
const factory = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluations,
  updateEvaluationById,
  deleteEvaluation
};

export default factory;