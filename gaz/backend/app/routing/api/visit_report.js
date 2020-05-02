/**
 * Implementación de la ruta: /api/v1.0/profiles
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/visit_report');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/visit-reports', Auth.isAuth, routing.all)
    .get('/visit-reports/:id', Auth.isAuth, routing.one)
    .post('/visit-reports', Auth.isAuth, routing.create)
    .put('/visit-reports/:id', Auth.isAuth, routing.update)
    .delete('/visit-reports/:id', Auth.isAuth, routing.destroy);

module.exports = router;
