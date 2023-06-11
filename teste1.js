const data = require("./fakeData");

const getUser = (req, res) => {
  const name = req.query.name;

  let userFound = null;

  if (name) {
    userFound = data.find((user) => user.name === name);
  }

  if (userFound) {
    userFound.reads++;
    return res.send(userFound);
  }

  res.status(404).send({ error: "User not found" });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  let userFound = null;
  
  if (id) {
    userFound = data.find((user) => user.id === Number(id));
  }

  if (userFound) {
    userFound.reads++;
    return res.send(userFound);
  }

  res.status(404).send({ error: "User not found" });
};

const getUsers = (req, res, next) => {
  res.send(data.filter(Boolean));
};

module.exports = {
  getUser,
  getUserById,
  getUsers,
};
