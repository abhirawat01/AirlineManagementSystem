const express = require('express')

const CityController = require('../../controllers/city-controllers')
const FlightController = require('../../controllers/city-controllers')
const router = express.Router()


router.post('/city',CityController.create)
router.get('/city/:id',CityController.get)
router.delete('/city/:id',CityController.destroy)
router.patch('/city/:id',CityController.update)
router.get('/city',CityController.getAll)


router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

module.exports = router;