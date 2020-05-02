/**
 * Implementación de la ruta: /api/v1.0/users
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/prospect');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/prospects', Auth.isAuth, routing.all)
    .get('/prospects/:id', Auth.isAuth, routing.one)
    .post('/prospects', Auth.isAuth, routing.create)
    .put('/prospects/:id', Auth.isAuth, routing.update)
    .delete('/prospects/:id', Auth.isAuth, routing.destroy);

module.exports = router;
