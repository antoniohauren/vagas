const data = require("./fakeData");

const getUser = (req, res) => {
  const name = req.query.name;

  let userFound = null;

  if (name) {
    userFound = data.find((user) => user.name === name);
  }

  teste1(userFound, res);
};

const getUserById = (req, res) => {
  const id = req.params.id;

  let userFound = null;
  
  if (id) {
    userFound = data.find((user) => user.id === Number(id));
  }

  teste1(userFound, res);
};

const getUsers = (req, res, next) => {
  res.send(data.filter(Boolean));
};


const teste1 = (userFound, res) => {
  if (userFound) {
    userFound.reads++;
    return res.send(userFound);
  }

  res.status(404).send({ error: "User not found" });
}

module.exports = {
  getUser,
  getUserById,
  getUsers,
};
