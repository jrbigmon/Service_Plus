module.exports = (sequelize, DataType) => {
  const SituacaoServico = sequelize.define('SituacaoServico', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    estado: DataType.STRING
  },

  {
    tableName: 'situacao_servicos',
    timestamps: false
  })

  SituacaoServico.associate = (models) => {
    SituacaoServico.hasMany(models.ClienteHasProfissional, {
      foreignKey: 'situacaoServicoId',
      as: 'servicos'
    })
  }

  return SituacaoServico
}
