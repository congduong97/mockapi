const express = require("express");
const UserController = require("./controllers/UserController");
const router = express.Router();

const authMiddleware = require("./middlewares/auth");

router.get("/users",authMiddleware,UserController.getListUsers);
router.post("/users",UserController.addUser);
router.put("/users/:user_id",UserController.updateUser);
router.delete("/users/:user_id",UserController.deleteUser);
router.post("/users/login",UserController.login);
module.exports = router;