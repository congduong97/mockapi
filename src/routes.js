const express = require("express");
const UserController = require("./controllers/UserController");
const router = express.Router();

router.get("/users",UserController.getListUsers);
router.post("/users",UserController.addUser);
router.put("/users/:user_id",UserController.updateUser);
router.delete("/users/:user_id",UserController.deleteUser);
router.post("/users/login",UserController.login);
module.exports = router;