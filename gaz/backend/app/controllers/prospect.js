/**
 * Controlador de Perfiles de usuario
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/prospect');
const Email = require('../email/email');
const Queries = require('../models/queries');
class ProfileController extends Controller {

    constructor(){
        super(Service);
    }

    async create(data) {
        const [city] = await Queries.get("city_name", { cityId: data.cityId});
        data.city = city;
        Email.sendEmail(data);
        return await super.create(data);
    }
}

module.exports = ProfileController;
