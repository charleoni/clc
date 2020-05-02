/**
 * Modelo de la tabla de usuarios
 * @author jaimecastrillon@gmail.com
 */

const Hash = require('../utils/hash');
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('APP_USERS', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'nombre es requerido'
      },
      len: {
        args: [3, 100],
        msg: "nombre debe tener mínimo 3 y máximo 100 caracteres"
      },
      customValidator(value) {
        if (!value) {
          throw new Error("nombre no debe estar vacío");
        }
      },
    }
  },
  mobile: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      len: {
        args: [7, 20],
        msg: "celular debe tener mínimo 7 y máximo 20 caracteres"
      },
    }
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      len: {
        args: [7, 20],
        msg: "teléfono debe tener mínimo 7 y máximo 20 caracteres"
      },
    }
  },
  address: {
    type: DataTypes.STRING(60),
    allowNull: true,
    validate: {
      len: {
        args: [5, 20],
        msg: "dirección debe tener mínimo 5 y máximo 60 caracteres"
      },
    }
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "correo electrónico no es válido"
      },
      notNull: {
        msg: 'correo electrónico es requerido'
      },
      len: {
        args: [5, 250],
        msg: "correo electrónico debe tener mínimo 5 y máximo 250 caracteres"
      },
      customValidator(value) {
        if (!value) {
          throw new Error("correo electrónico no debe estar vacío");
        }
      },
      isUnique: function(email, next) {
        const self = this;
        return Validator.isUnique('../models/user.js', self, next, { email }, 'correo electrónico está asociado a otro usuario');
      }
    }
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'usuario es requerido'
      },
      len: {
        args: [5, 30],
        msg: "usuario debe tener mínimo 5 y máximo 30 caracteres"
      },
      customValidator(value) {
        if (!value) {
          throw new Error("usuario no debe estar vacío");
        }
      },
      isUnique: function(username, next) {
        const self = this;
        return Validator.isUnique('../models/user.js', self, next, { username }, 'nombre de usuario está asociado a otro usuario');
      }
    },
    unique: {
      args: true,
      msg: 'nombre de usuario en uso'
    }
  },
  access: {
    type: DataTypes.STRING(80),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'contraseña es requerida'
      },
      len: {
        args: [60, 80],
        msg: "contraseña debe tener mínimo 6 y máximo 12 caracteres"
      },
      customValidator(value) {
        if (!value) {
          throw new Error("contraseña no debe estar vacía");
        }
      },
    }
  },
  supervisorId: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'código de supervisor es requerido'
      },
      len: {
        args: [5, 10],
        msg: "código de supervisor debe tener mínimo 5 y máximo 10 caracteres"
      },
      customValidator(value) {
        if (!value) {
          throw new Error("código de supervisor no debe estar vacío");
        }
      },
    }
  },
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'APP_PROFILES',
      key: 'id'
    },
    validate: {
      notNull: {
        msg: 'perfil de usuario es requerido'
      },
      customValidator(value) {
        if (!value) {
          throw new Error("perfil de usuario no debe estar vacío");
        } else if (isNaN(value)) {
          throw new Error("perfil de usuario debe ser numérico");
        }
      },
    }
  },
  token: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  acceptTerms: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
}, {
  underscored: true,
  timestamps: true,
  freezeTableName: true,
  defaultScope: {
    attributes: { exclude: ['access'] },
  },
  scopes: {
    withPassword: {
      attributes: { include: ['access'], exclude: ['createdAt', 'updatedAt', 'token'] },
    }
  },
  hooks: {
    beforeCreate: (user, options) => {
      return Hash.createHash(user.access).then(encrypted => {
        user.access = encrypted;
      });
    }
  }
});
