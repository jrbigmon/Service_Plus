module.exports = (sequelize, DataType) => {
  const ClienteHasProfissional = sequelize.define('ClienteHasProfissional', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clienteId: {
      type: DataType.INTEGER,
      field: 'cliente_id',
      foreignkey: true
    },

    profissionalId: {
      type: DataType.INTEGER,
      field: 'profissional_id',
      foreignkey: true
    },

    dataServico: {
      type: DataType.DATE,
      field: 'data_servico'
    },

    precoServico: {
      type: DataType.FLOAT,
      field: 'preco_servico'
    },

    descricaoServico: {
      type: DataType.STRING,
      field: 'descricao_servico'
    },

    situacaoServicoId: {
      type: DataType.INTEGER,
      field: 'situacao_servico_id',
      foreignkey: true
    }
  },

  {
    tableName: 'clientes_has_profissionais',
    timestamps: false
  })

  ClienteHasProfissional.associate = (models) => {
    ClienteHasProfissional.belongsTo(models.SituacaoServico, {
      foreignKey: 'situacaoServicoId',
      as: 'situacaoServico'
    })

    ClienteHasProfissional.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
      as: 'cliente'
    })

    ClienteHasProfissional.belongsTo(models.Profissional, {
      foreignKey: 'profissionalId',
      as: 'profissional'
    })
  }

  return ClienteHasProfissional
}
