/**
 * Servicio que implementa la funcionalidad de prospectos
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/prospect');
const Service = require('./service');

class ProspectService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id"]
            },
            one: {
                attributes: ["id", "code", "name", "tradeName", "phone", "mobile", "email", "address", "departmentId","cityId", "location", "supplier", "turnover", "installedCapacity", "observations", "userId", "active", "createdAt"]
            },
            all: {
                attributes: ["id", "code", "name", "tradeName", "phone", "mobile", "email", "address", "departmentId","cityId", "location", "supplier", "turnover", "installedCapacity", "observations", "userId", "active", "createdAt"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ProspectService;
