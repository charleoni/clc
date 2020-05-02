/**
 * Modelo de la tabla de perfiles
 * @author jaimecastrillon@gmail.com
 */

module.exports = (sequelize, DataTypes) => sequelize.define('visit_reports', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        idSupervisor: {
            type: DataTypes.STRING(8),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'supervisor es requerido'
                },
                len: {
                    args: [4, 8],
                    msg: "supervisor debe tener mínimo 4 y máximo 8 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("supervisor no debe estar vacío");
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
            type: DataTypes.STRING(12),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'punto de venta es requerido'
                },
                len: {
                    args: [3, 12],
                    msg: "punto de venta debe tener mínimo 3 y máximo 12 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("punto de venta no debe estar vacío");
                    }
                }
            }
        },
        branchOffice: {
            type: DataTypes.STRING(2),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'sucursal es requerida'
                },
                max: {
                    args: [2],
                    msg: "sucursal debe tener máximo 2 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("sucursal no debe estar vacía");
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
                customValidator(value) {
                    if (typeof (value) !== 'boolean') {
                        throw new Error("autorización ser verdadero o falso");
                    }
                },
            }
        },
        need: {
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
        observation: {
            type: DataTypes.STRING(250),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'observación es requerida'
                },
                len: {
                    args: [5, 250],
                    msg: "observación debe tener mínimo 5 y máximo 250 caracteres"
                },
                customValidator(value) {
                    if (!value) {
                        throw new Error("observación no debe estar vacío");
                    }
                }
            }
        },
        startDate: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        startLocation: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        endDate: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        endLocation: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        isFinished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                customValidator(value) {
                    if (typeof (value) !== 'boolean') {
                        throw new Error("finalizado debe ser verdadero o falso");
                    }
                },
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        underscored: true,
        timestamps: true,
    }
);
