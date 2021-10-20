/* eslint-disable no-unused-vars */
const { request, response } = require("express");

const register = (req = request, res = response) => {
  res.status(200).json({
    mensaje: 'Todo OK en registro'
  });
}


const login = (req = request, res = response) => {
  res.status(200).json({
    mensaje: 'Todo OK en login'
  });
}

const renew = (req = request, res = response) => {
  res.status(200).json({
    mensaje: 'Todo OK en renew'
  });
}


module.exports = { register, login, renew }
