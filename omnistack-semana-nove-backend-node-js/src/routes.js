const express = require('express');
const multer = require('multer');
const updateConfig = require('./config/upload');

const SessionController = require('./controller/SessionController');
const SpotControlller = require('./controller/SpotController');
const DashboardController = require('./controller/DashboardController');
const BookingController = require('./controller/BookingController');

const routes = express.Router();
const upload = multer(updateConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotControlller.index);
routes.post('/spots', upload.single('thumbnail'), SpotControlller.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;