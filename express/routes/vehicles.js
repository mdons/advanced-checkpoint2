const express = require("express");
const router = express.Router();
const VehiclesController = require("../controllers/vehicles");

router.get("/", (req, res) => {
  VehiclesController.list().then(results => res.json(results));
});

router.post("/", (req, res) => {
  VehiclesController.create(req.body).then(result => res.json(result));
});

router.delete("/:id", (req, res) => {
  VehiclesController.remove(req.params.id).then(() => res.json({}));
});

router.get("/:id", (req, res) => {
  VehiclesController.show(req.params.id).then(result => res.json(result));
});

module.exports = router;
