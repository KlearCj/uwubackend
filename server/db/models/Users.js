const db = require("..");
const S = require("sequelize");
const bcrypt = require("bcrypt");

class Users extends S.Model {
  validatePass(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password)
      .catch((err) => console.log(err));
  }
}

Users.init(
  {
    username: { type: S.STRING, allowNull: false, unique: true },
    email: { type: S.STRING, isEmail: true, allowNull: false, unique: true },
    password: { type: S.STRING, allowNull:false },
    salt: { type: S.STRING },
  },
  { sequelize: db, modelName: "users" }
);

Users.beforeCreate((user) => {
  user.salt = bcrypt.genSaltSync(8);

  return bcrypt
    .hash(user.password, user.salt)
    .then((hash) => (user.password = hash))
    .catch((err) => console.log(err));
});

module.exports = Users;
