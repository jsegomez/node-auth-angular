const { Router } = require('express');

// Métodos en controlador
const { register, login, renew } = require('../controllers/auth.controller');

const router = Router();

router.post('/register', register);

router.post('/login', login);

router.get('/renew', renew);

module.exports = router;
