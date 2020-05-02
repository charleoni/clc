/**
 * Controlador para subida de archivos
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/upload');

class UploadController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = UploadController;
