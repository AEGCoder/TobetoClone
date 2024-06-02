const router = require('express').Router();



const catalogRouter = require('./catalog.js');
const announcementRouter = require('./announcement.js');
const educationRouter = require('./education.js');
const authRouter = require('./auth.js');
const userRouter = require('./users.js');


router.use('/catalog', catalogRouter);
router.use('/announcement', announcementRouter);
router.use('/education', educationRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);



module.exports = router;