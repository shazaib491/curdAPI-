const express = require("express");
const router = express.Router();
const blogController = require("./../controller/blog");

router.get("/getData", blogController.getData)

router.post("/saveData", blogController.saveData)

router.get("/editData/:id", blogController.editData)

router.patch("/updateData/:id", blogController.updateData)

router.delete("/deleteData/:id", blogController.deleteData)


module.exports = router;