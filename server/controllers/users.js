const Users = require('../db/models')

const UsersCtrl={
signup: async (req, res)=>{
try{
    await Users.create(req.body)
    res.status(201).json({
        message: `User has been created`,
    })
}
catch{}
},
login: async (req,res)=>{
const { email, password } = req.body;
try{
  const user= await Users.findOne({
    where: { email },
  })
  
}catch{}
   /*  Users.findOne({
      where: { email },
    }).then((user) => {
      if (!user) return res.sendStatus(401);
  
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
        else {
          const payload = {
            email: user.email,
            username: user.username,
          };
          const token = generateToken(payload);
          res.cookie("token", token).send(payload);
        }
      });
    }); */
}
}

module.exports= UsersCtrl