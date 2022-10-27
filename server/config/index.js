require("dotenv").config();
const SECRET= process.env.SECRET
const jwt = require('jsonwebtoken')

generateToken=(payload)=>{
    const token = jwt.sign({ payload }, SECRET, {
        expiresIn: "1d",
      });
    
      return token;
}

validateToken=(token)=>{
    return jwt.verify(token, SECRET)
}

module.exports={ generateToken, validateToken}