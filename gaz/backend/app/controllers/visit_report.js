/**
 * Controlador de Reportes de visita
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/visit_report');

class VisitReportController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = VisitReportController;
