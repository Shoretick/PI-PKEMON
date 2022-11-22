const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    createdInDB:{ 
      type: DataTypes.BOOLEAN,
      default: false, 
      defaultValue: true

  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  life: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  attack: {
    type: DataTypes.FLOAT
  },

  defending:{
    type: DataTypes.FLOAT
  },

  image: {
    type: DataTypes.STRING
  },

  speed: {
    type: DataTypes.STRING
  },
  height: {
    type: DataTypes.FLOAT
  },
  weight: {
    type: DataTypes.STRING
  }
  });
};
