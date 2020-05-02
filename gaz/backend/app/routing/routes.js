/**
 * Funcionalidad que implementa las rutas que van a ser configuradas en la aplicación
 * por los Controladores
 *
 * @author jaimecastrillon@gmail.com
 */

const profile = require('./api/profile');
const user = require('./api/user');
const query = require('./api/query');
const prospect = require('./api/prospect');
const visit_report = require('./api/visit_report');
const pos_visit = require('./api/pos_visit');
const upload = require('./api/upload');

module.exports = [
  profile,
  user,
  query,
  prospect,
  visit_report,
  pos_visit,
  upload
];
