import teacherRepository from '../repositories/TeacherRepository.js';

const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
}

const getAllTeacher = () => {
  return teacherRepository.getAllTeacher();
}

const updateTeacher = (id, teacherModel) => {
  return teacherRepository.updateTeacher(id, teacherModel);
}



const deleteTeacher = (id) => {
  return teacherRepository.deleteTeacher(id);
}

const services = {
  saveTeacher,
  getTeacherById,
  getAllTeacher,
  updateTeacher,
  deleteTeacher
};

export default services;
