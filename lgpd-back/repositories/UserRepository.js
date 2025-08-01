import User from '../models/User.js';

const saveUser = async (userModel) => {
  return await User.create(userModel);
}

const getUserById = async (id) => {
  return await User.findByPk(id);
}

const getAllUsers = async () => {
  return await User.findAll({
    order: [['id', 'ASC']]
  });
}

const updateUserById = async (id, userModel) => {

  try {
    const result = await User.update(userModel, {
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

const deleteUser = async (id) => {
  return await User.destroy({
    where: { id:id }
  });
}

const factory = {
  saveUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUser
};

export default factory;