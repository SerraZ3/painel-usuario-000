const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");
const storage = require("../helpers/multer");
const multer = require("multer");
const upload = multer({ storage });

router.get("/create",userController.create);
// router.post("/",  upload.array("avatar", 10), userController.store);
router.post("/",  upload.single("avatar"), userController.store);

router.get("/edit/:id", userController.edit);
router.put("/:id",upload.single("avatar"), userController.update);

router.get("/delete/:id", userController.delete);
router.delete("/:id", userController.destroy);

router.get("/:id", userController.show);
router.get("/", userController.index);

module.exports = router;
