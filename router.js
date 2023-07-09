const express = require("express");
const router = express.Router();
const photoTraining = require("./controller/photoTraining");

router.post("/post/photo-training", photoTraining.savePhotos);
router.get("/get/photo-training", photoTraining.getPhotos);

module.exports = router;
