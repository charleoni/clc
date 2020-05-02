/**
 * Implementación de la ruta: /api/v1.0/pos-visits
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/pos_visit');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/pos-visits', Auth.isAuth, routing.all)
    .get('/pos-visits/:id', Auth.isAuth, routing.one)
    .post('/pos-visits', Auth.isAuth, routing.create)
    .put('/pos-visits/:id', Auth.isAuth, routing.update)
    .delete('/pos-visits/:id', Auth.isAuth, routing.destroy);

module.exports = router;
