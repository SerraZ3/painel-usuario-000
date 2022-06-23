const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");


router.get("/create", userController.create);
router.post("/", userController.store);


router.get("/edit/:id", userController.edit);
router.put("/:id", userController.update);

router.get("/delete/:id", userController.delete);
router.delete("/:id", userController.destroy);

router.get("/:id", userController.show);
router.get("/", userController.index);

module.exports = router;
