
import user from './User.js';
import teacher from './Teacher.js';
import course from './Course.js';
import evaluation from './Evaluation.js';

const associate = () => {
  course.hasMany(teacher, { foreignKey: 'courseId' });
  user.hasMany(evaluation, { foreignKey: 'userId' });
  course.hasMany(evaluation, { foreignKey: 'courseId' }); // Corrigido aqui
};

export default associate;
