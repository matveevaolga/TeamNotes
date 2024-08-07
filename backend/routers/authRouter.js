const Router = require('express');
const router = new Router();
const authController = require('./authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/notes', authMiddleware, authController.notes);
router.post('/createGroup', authMiddleware, authController.createGroup);
router.post('/getInvitation', authMiddleware, authController.getInvitation)
router.post('/declineInvitation', authMiddleware, authController.declineInvitation)
router.post('/acceptInvitation', authMiddleware, authController.acceptInvitation)
router.post('/removeGroup', authMiddleware, authController.removeGroup);
router.post('/getName', authMiddleware, authController.getName);
router.post('/getEmail', authMiddleware, authController.getEmail);
router.get('/getUserGroups', authMiddleware, authController.getUserGroups);

// router.post('/addUserToGroup', authMiddleware, authController.addUserToGroup)

module.exports = router;