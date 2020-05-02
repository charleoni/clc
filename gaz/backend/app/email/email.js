/**
 * Funcionalidad utilizada para realizar el envío de correos electrónicos desde la aplicación
 * @author jaimecastrillon@gmail.com
 *
 *  https://www.google.com/settings/security/lesssecureapps
 *  https://accounts.google.com/b/0/displayunlockcaptcha
 */

// TODO: Pasar la estructura del html a una funcionalidad independiente

const nodemailer = require('nodemailer');
const { email } = require('../config.js');
const Logger = require('../utils/logger')();

module.exports = ({
    sendEmail: async (data) => {
        try{
            let transporter = nodemailer.createTransport(email);
            const capacity = (data) => {
                let html = '';
                data.map(item => {
                    html = html + `<p style="margin: 1px 0;"> Item: ${item.item} Cantidad: ${item.quantity} Precio: ${item.price} </p>`
                });
                return html;
            };
            let info = await transporter.sendMail({
                from: `"GAZ SGC" <${email.auth.user}>`,
                to: 'jaimecastrillon@gmail.com, charleoni@gmail.com',
                subject: `Prospecto : ${data.name} ${data.turnover} k`,
                text: 'Se ha registrado un nuevo prospecto',
                html: `
                    <p>Se ha registrado un nuevo prospecto con los siguientes datos:</p>
                    <table style="width: 80%; border-collapse: collapse;">
                        <tbody>
                          <tr style="border: 3px solid #dedede;">
                            <td>Nombres y apellidos:</td>
                            <td><b>${data.name}</b></td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Nombre del comercio:</td>
                            <td>${data.tradeName}</td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Teléfono</td>
                            <td><b>${data.phone}</b></td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Celular</td>
                            <td><b>${data.mobile}</b></td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Correo electrónico:</td>
                            <td><b>${data.email}</b></td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Dirección:</td>
                            <td>${data.address}</td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Ciudad:</td>
                            <td>${data.city.name}</td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Proveedor actual:</td>
                            <td>${data.supplier}</td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Capacidad instalada:</td>
                            <td>${capacity(data.installedCapacity)}</td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Volumen mensual (k):</td>
                            <td><b>${data.turnover}</b></td>
                          </tr>
                          <tr style="border: 3px solid #dedede;">
                            <td>Observaciones:</td>
                            <td>${data.observations}</td>
                          </tr>
                      </tbody>
                    </table>
                `
            });
            Logger.info(`[action: email-info][msg: ${JSON.stringify(info)}][line:${__line}:${__filename}]`);
        } catch (error) {
            Logger.info(`[action: email-error][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
        }
    }
});
