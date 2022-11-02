const { generateToken } = require("../config");
const {Users} = require("../db/models");

const UsersCtrl = {
  signup: async (req, res) => {
    try {
      await Users.create(req.body);
      res.status(201).json({
        message: `User has been created`,
      });
    } catch(err) {
      console.log(err)
      res.sendStatus(400);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({
        where: { email },
      });
      await user.validatePass(password);
      const payload = user.email;
      const token = generateToken(payload);
      res.cookie("token", token).send(payload);
    } catch {
      return res.sendStatus(401);
    }
  },
  logout: (req, res) => {
    res.clearCookie("jwt");
    res.sendStatus(204);
  },
  updateUser: async (req, res) => {
    try {
      const user = await Users.findOne(req.body);
      await user.update(req.body);
      await user.save();
    } catch {
        res.sendStatus(401)
    }
  },
};

module.exports = UsersCtrl;

