import Course from '../models/Course.js';

const saveCourse = async (courseModel) => {
  return await Course.create(courseModel);
}

const getCourseById = async (id) => {
  return await Course.findByPk(id);
}

const getAllCourses = async () => {
  return await Course.findAll({
    order: [['id', 'ASC']]
  });
}

const updateCourseById = async (id, courseModel) => {

  try {
    const result = await Course.update(courseModel, {
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

const deleteCourse = async (id) => {
  return await Course.destroy({
    where: { id:id }
  });
}
const factory = {
  saveCourse,
  getCourseById,
  getAllCourses,
  updateCourseById,
  deleteCourse
};
export default factory;