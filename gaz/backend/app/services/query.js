/**
 * Servicio que implementa la funcionalidad de consultas personalizadas
 * @author jaimecastrillon@gmail.com
 */

const Queries = require('../models/queries');
const Service = require('./service');
const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();

class QueryService extends Service {

    constructor() {
        super();
        this.months = {
            "01" : "Ene",
            "02" : "Feb",
            "03" : "Mar",
            "04" : "Abr",
            "05" : "May",
            "06" : "Jun",
            "07" : "Jul",
            "08" : "Ago",
            "09" : "Sep",
            "10" : "Oct",
            "11" : "Nov",
            "12" : "Dic",
        };
        this.labels = [];
    }

    _createLabels(month){
        this.labels.push(this.months[month])
    }

    async _createPie (data) {
        let pie = { labels: [],  data: [] };
            let total = 0;

        data.map(item => {
            total = total + Number(item['KILOS']);
        });

        data.map(item => {
            pie.labels.push(`${item['NAME_ZONE']} ${parseInt(item['KILOS'] / total * 100 )}%`);
            pie.data.push(Number(item['KILOS']));
            // this._createLabels()
        });

        return pie;
    };

    async _createLines (data, profile) {
        try {
            // Creación de datos base para la gráfica
            let lines = (profile === 'DC')
                ? [
                    {data: [], label: 'Antioquia'},
                    {data: [], label: 'Centro'},
                    {data: [], label: 'Eje'},
                    {data: [], label: 'Otros'},
                    {data: [], label: 'Valle'}
                ] : [{data: [], label: 'Promedio (Pesos / Kilos)'}];
            // Contador para identificar la zona
            let counter = 0;
            data.map(item => {
                // Creación de información para la gráfica
                lines[counter].data.push(parseFloat(item.PRICE).toFixed(0));
                this._createLabels(item.MONTH)
                // Cuando el perfil el Director Comercial, se agrega el contador para identificar la zona
                if (profile === 'DC') {
                    counter = (counter === 4) ? 0 : counter + 1;
                }
            });
            return lines;
        } catch (error) {
            Logger.error(`[action: _createLines][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
        }
    };

    async _createBars (data) {
        try{
            let bars = {
                data: [
                    { data: [], label: 'Kg vendidos' }
                ],
                labels: []
            };
            data.map(item => {
                bars.data[0].data.push(parseFloat(item.KILOS).toFixed(0));
                bars.labels.push(item.REFERENCIA);
            });
            return bars;
        } catch (error) {
            Logger.error(`[action: _createBars][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
        }
    };

    async query(query, params) {
        try{
            const data = await Queries.get(query, params);
            return (data)
                ? Response.success(data)
                : await Promise.reject(Response.error(Messages('QUERY_ERROR'), 400));
        } catch (error) {
            Logger.error(`[action: query][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('QUERY_ERROR'), error.status || 500));
        }
    }

    async report(profile, query, params) {
        try{
            let data;
            let report = [];
            let table = [];
            this.labels = [];
            console.log('Profile: ', profile);
            if(profile === 'DC' && query === "ventas_zonas_kg"){
                data = await Queries.get(query, params);
                report = await this._createPie(data);
            } else if(profile === 'DC' && query === "precios_zonas_kg"){
                data = await Queries.get(query, params);
                report = await this._createLines(data, profile);
            } else if(profile === 'DC' && query === "total_zonas_kg"){
                data = await Queries.get(query, params);
                report = await this._createLines(data, profile);
            } else if(profile === 'DC' && query === "referencias_kg"){
                data = await Queries.get(query, params);
                report = await this._createBars(data);
            } else if(profile === 'SU' && query === "pos_average"){
                data = await Queries.get(query, params);
                report = await this._createLines(data, profile);
                data.map(item => {
                    table.push({
                        month: item.MONTH,
                        pesos: item.PESOS,
                        kilos: item.KILOS,
                        precio: item.PRICE
                    });
                });
                report = { report, table, labels: this.labels };
            }
            return (report)
                ? Response.success(report)
                : await Promise.reject(Response.error(Messages('QUERY_ERROR'), 400));
        } catch (error) {
            Logger.error(`[action: query][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('QUERY_ERROR'), error.status || 500));
        }
    }

    async posList(profile, params) {
        try{
            let data = [];
            if (profile === 'DC') {
                data = await Queries.get('app_pos_dc', {});
            } else if(profile === 'SC') {
                data = await Queries.get('app_pos_sc', params);
            } else if(profile === 'SU') {
                data = await Queries.get('app_pos_su', params);
            }
            return (data)
              ? Response.success(data)
              : await Promise.reject(Response.error(Messages('QUERY_ERROR'), 400));
        } catch (error) {
            Logger.error(`[action: query][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('QUERY_ERROR'), error.status || 500));
        }
    }
}

module.exports = QueryService;
