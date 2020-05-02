/**
 * Modelo de la tabla de prospectos
 * @author jaimecastrillon@gmail.com
 */

module.exports = (sequelize, DataTypes) => sequelize.define('APP_PROSPECTS', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(12),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'código es requerido'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("código no debe estar vacío");
          }
        },
      }
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'nombre es requerido'
        },
        len: {
          args: [5, 80],
          msg: "nombre debe tener mínimo 5 y máximo 80 caracteres"
        },
        customValidator(value) {
          if (!value) {
            throw new Error("nombre no debe estar vacío");
          }
        },
      }
    },
    tradeName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'celular es requerido'
        },
        len: {
          args: [10, 10],
          msg: "celular debe tener 10 caracteres"
        },
        customValidator(value) {
          if (!value) {
            throw new Error("celular no debe estar vacío");
          }
        },
      }
    },
    email: {
      type: DataTypes.STRING(150),
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
          args: [5, 150],
          msg: "correo electrónico debe tener mínimo 5 y máximo 150 caracteres"
        },
        customValidator(value) {
          if (!value) {
            throw new Error("correo electrónico no debe estar vacío");
          }
        },
      }
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'dirección es requerida'
        },
        len: {
          args: [5, 100],
          msg: "dirección debe tener mínimo 5 y máximo 100 caracteres"
        },
        customValidator(value) {
          if (!value) {
            throw new Error("dirección no debe estar vacía");
          }
        },
      }
    },
    departmentId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'departamento es requerido'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("departamento no debe estar vacío");
          } else if (isNaN(value)) {
            throw new Error("departamento debe ser numérico");
          }
        },
      }
    },
    cityId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'ciudad es requerida'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("ciudad no debe estar vacía");
          } else if (isNaN(value)) {
            throw new Error("ciudad debe ser numérica");
          }
        },
      }
    },
    location: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    installedCapacity: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
      validate: {
        notNull: {
          msg: 'capacidad instalada es requerida'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("capacidad instalada no debe estar vacía");
          }
        },
      }
    },
    supplier: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'proveedor actual es requerido'
        },
        len: {
          args: [5, 60],
          msg: "proveedor actual debe tener mínimo 5 y máximo 60 caracteres"
        },
        customValidator(value) {
          if (!value) {
            throw new Error("proveedor actual no debe estar vacío");
          }
        },
      }
    },
    turnover: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'volumen mensual es requerido'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("volumen mensual no debe estar vacío");
          } else if (isNaN(value)) {
            throw new Error("volumen mensual debe ser numérico");
          }
        },
      }
    },
    observations: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'usuario es requerido'
        },
        customValidator(value) {
          if (!value) {
            throw new Error("usuario no debe estar vacío");
          } else if (isNaN(value)) {
            throw new Error("usuario debe ser numérico");
          }
        },
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
  }
);
