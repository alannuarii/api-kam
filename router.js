const express = require("express");
const router = express.Router();
const photoTraining = require("./controller/photoTraining");

router.post("/post/photo-training", photoTraining.savePhotos);
router.get("/get/photo-training", photoTraining.getPhotos);
router.delete("/delete/photo-training", photoTraining.deletePhoto);

module.exports = router;
