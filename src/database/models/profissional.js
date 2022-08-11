module.exports = (sequelize, DataType) => {
  const Profissional = sequelize.define('Profissional', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nome: DataType.STRING,

    sobrenome: DataType.STRING,

    dataNascimento: {
      type: DataType.DATE,
      field: 'data_nascimento'
    },

    cep: DataType.STRING,

    telefone: DataType.STRING,

    email: DataType.STRING,

    senha: DataType.STRING,

    areaId: {
      type: DataType.INTEGER,
      field: 'area_id',
      foreignKey: true
    },

    cpf: DataType.STRING,

    avatar: {
      type: DataType.STRING,
      defaultValue: 'defaultAvatar.jpeg',
      allowNull: true
    },

    descricao: {
      type: DataType.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'profissionais',
    timestamps: false
  })

  Profissional.associate = (models) => {
    Profissional.belongsTo(models.Area, {
      foreignkey: 'areaId',
      as: 'area'
    })

    Profissional.belongsToMany(models.Cliente, {
      as: 'profissionalCliente',
      foreignKey: 'profissionalId',
      otherKey: 'clienteId',
      through: models.ClienteHasProfissional
    })

    Profissional.hasMany(models.ClienteHasProfissional, {
      as: 'servicosDoProfissional',
      foreignKey: 'profissionalId'
    })
  }

  return Profissional
}
