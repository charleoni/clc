/**
 * Modelo de la tabla de visitas a puntos de venta
 * @author jaimecastrillon@gmail.com
 */

module.exports = (sequelize, DataTypes) => sequelize.define('APP_POS_VISITS', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    supervisorId: {
      type: DataTypes.STRING(12),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'supervisor es requerido'
        },
        len: {
          args: [4, 12],
          msg: 'supervisor debe tener mínimo 4 y máximo 12 caracteres'
        },
        customValidator (value) {
          if (!value) {
            throw new Error('supervisor no debe estar vacío')
          }
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      default: new Date()
    },
    code: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'punto de venta es requerido'
        },
        len: {
          args: [3, 13],
          msg: 'punto de venta debe tener mínimo 3 y máximo 13 caracteres'
        },
        customValidator (value) {
          if (!value) {
            throw new Error('punto de venta no debe estar vacío')
          }
        }
      }
    },
    branchCode: {
      type: DataTypes.STRING(2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'sucursal es requerida'
        },
        max: {
          args: [2],
          msg: 'sucursal debe tener máximo 2 caracteres'
        },
        customValidator (value) {
          if (!value) {
            throw new Error('sucursal no debe estar vacía')
          }
        }
      }
    },
    location: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    authorization: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        customValidator (value) {
          if (typeof (value) !== 'boolean') {
            throw new Error('autorización ser verdadero o falso')
          }
        },
      }
    },
    needs: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    inventory: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    commercialBehavior: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    observations: {
      type: DataTypes.STRING(250),
      validate: {
        len: {
          args: [5, 250],
          msg: 'observación debe tener mínimo 5 y máximo 250 caracteres'
        },
        customValidator (value) {
          if (!value) {
            throw new Error('observación no debe estar vacío')
          }
        }
      }
    },
    startDate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    endDate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    startLocation: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    endLocation: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    isFinished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        customValidator (value) {
          if (typeof (value) !== 'boolean') {
            throw new Error('finalizado debe ser verdadero o falso');
          }
        },
      }
    },
    userId:{
      type: DataTypes.INTEGER(10).UNSIGNED,
      defaultValue: null,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
  }
)
