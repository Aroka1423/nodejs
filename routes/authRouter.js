const Router = require('express');
const controllers = require('../controllers/authControllers');
const UserController = require('../controllers/UserController');
const router = new Router();
const authMiddleware = require('../middleware/middlware');
const RegisterMiddleware = require('../middleware/RegisterMiddleware');


router.post("/registration", RegisterMiddleware, controllers.registration);
router.post("/login", controllers.login);
router.get("/users", authMiddleware, UserController.index);
router.delete("/users/:id", authMiddleware, UserController.destroy);
router.put("/users/:id", authMiddleware, UserController.update);


module.exports = router;