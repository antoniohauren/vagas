const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");
const teste6 = require("./teste6");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

// teste 1
app.get("/user", teste1.getUser);
app.get("/user/:id", teste1.getUserById);
app.get("/users", teste1.getUsers);

// teste 2
app.post("/users", teste2);

// teste 3
app.delete("/users", teste6.tokenMiddleware, teste3.deleteByName);
app.delete("/users/:id", teste6.tokenMiddleware, teste3.deleteById);

// teste 4
app.put("/users/:id", teste6.tokenMiddleware, teste4.updateById);
app.put("/users", teste6.tokenMiddleware, teste4.updateById);

// teste 5
app.get("/users/access", teste5.getReads);
app.get("/users/access/:id", teste5.getReadsById);

// teste 6
app.post("/login", teste6.tokenGenerate);

const port = 3000;

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
