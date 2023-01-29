const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  currentUser 
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, currentUser);

module.exports = router;