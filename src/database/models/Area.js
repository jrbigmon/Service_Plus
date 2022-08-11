module.exports = (sequelize, DataType) => {
  const Area = sequelize.define('Area', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nome: DataType.STRING
  },
  {
    tableName: 'areas',
    timestamps: false
  })

  Area.associate = (models) => {
    Area.hasMany(models.Profissional, {
      foreignKey: 'area_id',
      as: 'profissionais'
    })
  }

  return Area
}
