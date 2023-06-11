const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(422).send({ error: "Please provide 'name' and 'job'" });
  }

  // Not a good way to generate ids but it works for now
  const id = data.at(-1).id + 1;

  const newUser = { id, name, job, hit: 0 };

  data.push(newUser);

  res.status(201).send(newUser);
};
