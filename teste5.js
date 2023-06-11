const data = require("./fakeData");

const getReads = (req, res) => {
  const name = req.query.name;

  let userFound = null;

  if (name) {
    userFound = data.find((user) => user.name === name);
  }

  if (userFound) {
    return res.send(
      `User ${userFound.name} was read ${userFound.reads} times.`
    );
  }

  res.status(404).send({ error: "User not found" });
};

const getReadsById = (req, res) => {
  const id = req.params.id;

  let userFound = null;

  if (id) {
    userFound = data.find((user) => user.id === Number(id));
  }

  if (userFound) {
    return res.send(
      `User ${userFound.name} was read ${userFound.reads} times.`
    );
  }

  res.status(404).send({ error: "User not found" });
};

module.exports = {
  getReads,
  getReadsById,
};
