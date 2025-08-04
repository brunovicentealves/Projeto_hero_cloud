import userRepository from '../repositories/UserRepository.js';

const saveUser = (userModel) => {
  return userRepository.saveUser(userModel);
}

const getUserById = (id) => {
  return userRepository.getUserById(id);
}

const getAllUsers = () => {
  return userRepository.getAllUsers();
}

const updateUser = (id, userModel) => {
  return userRepository.updateUser(id, userModel);
}



const deleteUser = (id) => {
  return userRepository.deleteUser(id);
}

const services = {
  saveUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
};

export default services;

