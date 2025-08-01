import Teacher from '../models/Teacher.js';

const saveTeacher = async (teacherModel) => {
  return await Teacher.create(teacherModel);
}

const getTeacherById = async (id) => {
  return await Teacher.findByPk(id);
}

const getAllTeachers = async () => {
  return await Teacher.findAll({
    order: [['id', 'ASC']]
  });
}

const updateTeacherById = async (id, teacherModel) => {

  try {
    const result = await Teacher.update(teacherModel, {
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

const deleteTeacher = async (id) => {
  return await Teacher.destroy({
    where: { id:id }
  });
}
const factory = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  updateTeacherById,
  deleteTeacher
};

export default factory;