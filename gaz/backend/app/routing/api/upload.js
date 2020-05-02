/**
 * Implementación de la ruta: /api/v1.0/profiles
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/upload');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router.post('/upload/:type', routing.upload);

module.exports = router;
