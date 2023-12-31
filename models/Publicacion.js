const { sequelize, DataTypes } =  require('../database');

const Publicacion = sequelize.define('Publicacion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    autor: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'publicaciones',
    timestamps: false
})


module.exports = Publicacion;