import courseRepository from '../repositories/CourseRepository.js';

const saveCourse = (courseModel) => {
  return courseRepository.saveCourse(courseModel);
}

const getCourseById = (id) => {
  return courseRepository.getCourseById(id);
}

const getAllCourses = () => {
  return courseRepository.getAllCourses();
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
  getAllCourses,
  updateCourse,
  deleteCourse
};

export default services;
