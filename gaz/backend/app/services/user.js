/**
 * Servicio que implementa la funcionalidad del modelo User
 * @author jaimecastrillon@gmail.com
 */

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Hash = require('../utils/hash')

const Database = require('../../app/database')
const Model = Database.import('../models/user')
const Profile = Database.import('../models/profile')
const Service = require('./service')

const Response = require('../routing/response')
const Messages = require('../utils/messages')
const Logger = require('../utils/logger')()

class UserService extends Service {

  constructor () {
    const modelOptions = {
      create: {
        attributes: ['id', 'name', 'email', 'username', 'profileId', 'active']
      },
      one: {
        attributes: ['id', 'name', 'email', 'username', 'profileId', 'supervisorId', 'active']
      },
      all: {
        attributes: ['id', 'name', 'email', 'username', 'profileId', 'active']
      },
    }
    super(Model, modelOptions)
  }

  async login (username, access) {
    try {
      Logger.info(`[action: login][msg: ${username}::${access}][line:${__line}:${__filename}]`)
      const user = await this.model.scope('withPassword').findOne({
        where: {
          [Op.or]: [{ username: username }, { email: username }]
        }
      })

      if (user && access) {
        if (user.active) {
          const isValid = await Hash.validateHash(access, user.access)
          if (isValid) {
            const profile = await Profile.findOne({
              where: { id: user.profileId },
              attributes: ['id', 'name', 'code']
            })
            this.model.update({ lastLogin: new Date() }, { where: { id: user.id } })
            const userData = {
              id: user.id,
              name: user.name,
              email: user.email,
              username: user.username,
              profileId: user.profileId,
              profileName: profile.name,
              profileCode: profile.code,
              supervisorId: user.supervisorId,
              lastLogin: user.lastLogin,
              acceptTerms: user.acceptTerms
            }
            return Response.success(userData)
          } else {
            await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404))
          }
        } else {
          await Promise.reject(Response.error(Messages('LOGIN_INACTIVE'), 403))
        }
      } else {
        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404))
      }
    } catch (error) {
      Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`)
      await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500))
    }
  }

  async password (username, current, access) {
    try {
      const user = await this.model.scope('withPassword').findOne({ where: { username: username } })
      if (user && current && access) {
        const isValid = await Hash.validateHash(current, user.access)
        if (isValid) {
          const password = await Hash.createHash(access)
          Logger.error(`[action: password][msg: ${username}::${current}::${access}::${password}][line:${__line}:${__filename}]`)
          if (password) {
            this.model.update({ access: password }, { where: { id: user.id } })
            return Response.success({ changed: true, name: user.name })
          } else {
            await Promise.reject(Response.error(Messages('PASSWORD_ERROR'), 400))
          }
        } else {
          await Promise.reject(Response.error(Messages('CHANGE_PASSWORD_ERROR'), 404))
        }
      } else {
        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404))
      }
    } catch (error) {
      Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`)
      await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500))
    }
  }

}

module.exports = UserService
