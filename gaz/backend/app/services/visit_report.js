/**
 * Servicio que implementa la funcionalidad del modelo VisitReport
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/visit_report');
const Service = require('./service');

class VisitReportService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "id_supervisor", "date", "code", "branch_office", "location", "authorization", "need", "inventory", "commercial_behavior", "observation", "start_date", "start_location", "end_date", "end_location", "is_finished", "active"]
            },
            one: {
                attributes: ["id", "id_supervisor", "date", "code", "branch_office", "location", "authorization", "need", "inventory", "commercial_behavior", "observation", "start_date", "start_location", "end_date", "end_location", "is_finished", "active"]
            },
            all: {
                attributes: ["id", "id_supervisor", "date", "code", "branch_office", "location", "authorization", "need", "inventory", "commercial_behavior", "observation", "start_date", "start_location", "end_date", "end_location", "is_finished", "active"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = VisitReportService;
