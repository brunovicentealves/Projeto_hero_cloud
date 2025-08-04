import teacherRepository from '../repositories/TeacherRepository.js';

const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
}

const getAllTeachers = () => {
  return teacherRepository.getAllTeachers();
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
  getAllTeachers,
  updateTeacher,
  deleteTeacher
};

export default services;
