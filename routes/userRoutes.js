// codigo atualizado do USERROUTER.JS
 
const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');
 
// ✅ Criar usuário (registro) — público
router.post('/', User.createUser);
 
// ✅ Listar todos os usuários
router.get('/', User.listUser);
 
// ✅ Buscar usuário por ID
router.get('/:id', User.listUserById);
 
// ✅ Atualizar usuário
router.put('/:id', User.updateUser);

// ✅ Deletar usuário
router.delete('/:id', User.deleteUser);
 
module.exports = router;