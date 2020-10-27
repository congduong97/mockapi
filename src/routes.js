const express = require("express");
const AddressController = require("./controllers/AddressController");
const CourseController = require("./controllers/CourseController");
const UserController = require("./controllers/UserController");
const router = express.Router();

const authMiddleware = require("./middlewares/auth");

router.get("/users",UserController.getListUsers);
router.post("/users",UserController.addUser);
router.put("/users/:user_id",UserController.updateUser);
router.delete("/users/:user_id",UserController.deleteUser);

router.post("/users/login",UserController.login);

// router.use(authMiddleware);

router.get("/users/:user_id/address",AddressController.index)
router.post("/users/:user_id/address",AddressController.store);
router.put("/users/:user_id/address",AddressController.update);
router.delete("/users/:user_id/address",AddressController.delete);

router.get('/users/:user_id/courses', CourseController.index);
router.post('/users/:user_id/courses', CourseController.store);
router.delete('/users/:user_id/courses', CourseController.delete);
module.exports = router;