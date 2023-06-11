const data = require("./fakeData");

const updateById = (req, res) => {
  const id = req.params.id || req.query.id;

  const { name, job } = req.body;

  if (!id) {
    return res.status(400).send({ error: "Id is required" });
  }

  const userFound = data.find((user) => user.id === Number(id));

  if (userFound) {
    const user = data.find((user) => user.id === Number(id));

    if (checkIfNameExists(name, res, id)) {
      return;
    }

    if (name) {
      user.name = name;
    }

    if (job) {
      user.job = job;
    }

    return res.send(user);
  }

  return res.status(404).send({ error: "User not found" });
};


const checkIfNameExists = (name, res, id) => {
  const userFound = data.find((user) => user.name === name);

  if (userFound && userFound.id !== Number(id)) {
    return res
      .status(409)
      .send({ error: `User with name '${userFound.name}' already exists` });
  }

  return false;
};

module.exports = { updateById };
