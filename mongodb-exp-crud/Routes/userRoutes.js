const router = require('express').Router();
const User = require('../Models/userSchema')
const auth = require ('../Middleware/auth')
const t = require('../Controllers/crudop')

router.post('/students',t[0]);
router.get('/students',t[1] )
router.get('/students/:id',t[2])
router.delete('/students/:id', t[3])
router.put('/students/:id', t[4])

router.post('/signup',t[5])
router.post('/login',t[6])
router.get('/profile',auth,t[7])

module.exports = router