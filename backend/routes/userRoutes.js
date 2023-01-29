const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  currentUser 
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/user', currentUser);

module.exports = router;