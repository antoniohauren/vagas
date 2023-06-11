const data = require("./fakeData");

const deleteByName = (req, res) => {
  const name = req.query.name;

  let userFound = null;

  if (name) {
    userFound = data.findIndex((user) => user?.name === name);
  }

  teste3(userFound, res);
};

const deleteById = (req, res) => {
  const id = req.params.id;

  let userFound = null;

  if (id) {
    userFound = data.findIndex((user) => user?.id === Number(id));
  }

  teste3(userFound, res);
};

const teste3 = (userFound, res) => {
  if (userFound !== null && userFound !== -1) {
    data[userFound] = null;
    return res.send({ data: "Success" });
  }

  res.status(404).send({ error: "User not found" });
}


module.exports = {
  deleteById,
  deleteByName,
};
