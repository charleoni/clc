/**
 * Servicio para subida de archivos
 * @author jaimecastrillon@gmail.com
 */

const Service = require('./service');
const { fileExtensions } = require('../config');
const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();
const path = require('path');

class UploadService extends Service {

    async upload(pathFile, file, type) {
        try{
            const validExtensions = fileExtensions[type];
            const pathUpload = path.resolve(pathFile, `${type}-${file.name.toLowerCase()}`);
            if (file && validExtensions.includes(file.mimetype)) {
                const uploaded = await file.mv(pathUpload);
                if (uploaded) {
                    await Promise.reject(Response.error(Messages('FILE_ERROR'), 400));
                } else {
                    return Response.success({ uploaded: true });
                }
            } else {
                await Promise.reject(Response.error(Messages('FILE_EXTENSION_ERROR'), 400));
            }
        } catch (error) {
            Logger.error(`[action: upload][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('FILE_ERROR'), error.status || 500));
        }
    }
}

module.exports = UploadService;
