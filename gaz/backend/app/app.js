const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

// Implementación de cors
app.use(cors({ exposedHeaders: ['Authorization'] }));
// Parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: true, limit: '10mb' }));
// Parse application/json
app.use(parser.json({ extended: true, limit: '10mb' }));

// Configuración para subir archivos al servidor
app.use(fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
}));
// Ruta de la carpeta pública
app.use(express.static(path.resolve(__dirname, '..', 'public')));
// Ruta de la carpeta de imágenes del reporte de visita
app.set('visit_report_path', path.resolve(__dirname, '..', 'public', 'images', 'visit-report'));

// Importación de las rutas de la app
const routes = require('./routing/routes');
app.use('/api/v1.0/', routes);

// Ruta de error cuando no se encuentre definida
app.all('*', (req, res) => {
    res.status(404).send({ 'error': 404 });
});

// Application server config
app.disable('x-powered-by');
//res.header("access-control-expose-headers", "Authorization");


module.exports = app;
