const UsersService = require("../services/user");
const UsersDTO = require("../dto/user");

const usersService = new UsersService();

//get all users
const getUsers = async (req, res) => {
  let result = await usersService.getUsers();
  let resultsDTO = result.map((user) => new UsersDTO(user));
  res.send(resultsDTO);
};

//add user
const saveUser = async (req, res) => {
  let user = req.body;
  let result = await usersService.addUser(user);
  res.send(result);
};

module.exports = {
  getUsers,
  saveUser,
};
