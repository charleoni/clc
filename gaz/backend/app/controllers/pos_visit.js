/**
 * Controlador de Reportes de visita
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/pos_visit');

class PosVisitController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = PosVisitController;
