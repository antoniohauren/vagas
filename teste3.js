const data = require("./fakeData");

const deleteByName = (req, res) => {
    const name = req.query.name;

    let userFound = null;

    if (name) {
        userFound = data.findIndex((user) => user?.name === name);
    }

    if (userFound !== -1) {
        data[userFound] = null;
        return res.send({ data: "Success" });
    }

    res.send({ error: "User not found" });
};

const deleteById = (req, res) => {
    const id = req.query.id;

    let userFound = null;

    if (id) {
        userFound = data.findIndex((user) => user.id === id);
    }

    if (userFound && userFound !== -1) {
        data[userFound] = null;
        return res.send({ data: "Success" });
    }

    res.send({ error: "User not found" });
};

module.exports = {
    deleteById,
    deleteByName,
}