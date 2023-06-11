const jwt = require("jsonwebtoken");

const secret = "secret";

const tokenMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ error: "Token required" });
  }

  try {
    jwt.verify(token, secret);
  } catch (err) {
    return res.status(403).send({ error: "Invalid token" });
  }

  role = jwt.decode(token).role;

  if (role !== "admin") {
    return res.status(401).send({ error: "Unauthorized" });
  }

  next();
};

const tokenGenerate = (req, res) => {
  const { role } = req.body;
  const roles = ["admin", "user"];

  if (!role || !roles.includes(role)) {
    return res
      .status(422)
      .send({ message: "Please provide a role (admin | user)" });
  }

  return res.send({ token: jwt.sign({ role }, secret) });
};

module.exports = {
  tokenMiddleware,
  tokenGenerate,
};
