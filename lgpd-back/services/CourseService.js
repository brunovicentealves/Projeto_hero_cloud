import courseRepository from '../repositories/CourseRepository.js';

const saveCourse = (courseModel) => {
  return courseRepository.saveCourse(courseModel);
}

const getCourseById = (id) => {
  return courseRepository.getCourseById(id);
}

const getAllCourse = () => {
  return courseRepository.getAllCourse();
}

const updateCourse = (id, courseModel) => {
  return courseRepository.updateCourse(id, courseModel);
}



const deleteCourse = (id) => {
  return courseRepository.deleteCourse(id);
}

const services = {
  saveCourse,
  getCourseById,
  getAllCourse,
  updateCourse,
  deleteCourse
};

export default services;
