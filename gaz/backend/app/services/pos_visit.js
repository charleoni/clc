/**
 * Servicio que implementa la funcionalidad del modelo PosVisit
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/pos_visit');
const Service = require('./service');

class PosVisitService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "supervisor_id", "date", "code", "branch_code", "location", "authorization", "needs", "inventory", "commercial_behavior", "observations", "start_date", "end_date", "start_location", "end_location", "is_finished",  "user_id","active"]
            },
            one: {
                attributes: ["id", "supervisor_id", "date", "code", "branch_code", "location", "authorization", "needs", "inventory", "commercial_behavior", "observations", "start_date", "end_date", "start_location", "end_location", "is_finished",  "user_id","active"]
            },
            all: {
                attributes: ["id", "supervisor_id", "date", "code", "branch_code", "location", "authorization", "needs", "inventory", "commercial_behavior", "observations", "start_date", "end_date", "start_location", "end_location", "is_finished",  "user_id","active"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = PosVisitService;
