const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').get(userController.fetchAllUsers);
router.route('/:email').get(userController.fetchUserByEmail);
router.route('/add').post(userController.addNewUser);
router.route('/update/:id').post(userController.updateUser);
router.route('/delete/:id').delete(userController.deleteUser);
router.route('/sendMail/:email/:c').get(userController.sendEmail);

module.exports = router;
