const router = require("express").Router()

const ServiceController = require("../controllers/serviceController")

router
    .route("/services")
    .post((req, res) => ServiceController.create(req, res))

router.route("/services").get((req, res) => ServiceController.getAll(req, res)) 

router.route("/services/:id").get((req, res) => ServiceController.get(req, res))

router.route("/services/:id").delete((req, res) => ServiceController.delete(req, res))

router.route("/services/:id").put((req, res) => ServiceController.update(req, res))

module.exports = router;