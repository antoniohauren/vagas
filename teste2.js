const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(422).send({ error: "Please provide 'name' and 'job'" });
  }

  const userFound = data.find((user) => user.name === name);

  if (userFound) {
    return res.status(409).send({ error: `User with name '${userFound.name}' already exists` });
  }

  // Not a good way to generate ids but it works for now
  const id = data.length + 1;

  const newUser = { id, name, job, reads: 0 };

  data.push(newUser);

  res.status(201).send(newUser);
};
