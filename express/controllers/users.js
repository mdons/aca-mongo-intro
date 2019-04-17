const { UsersModel } = require("../../mongo/models");

const defaultUser = {
  name: "Ted",
  age: "24"
};

const getAll = () => {
  return UsersModel.find({});
};

const getOne = name => {
  // find one user by name
  return UsersModel.findOne({ name });
};

const createDefault = () => {
  // insert default user into db
  return UsersModel.create(defaultUser);
};

const createUser = user => {
  // insert user from POST request into db
};

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.updateOne({ name }, updates);
};

const deleteUser = name => {
  // use name as the query
};

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
};
