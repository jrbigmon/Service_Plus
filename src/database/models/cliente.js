module.exports = (sequelize, DataType) => {
  const Cliente = sequelize.define('Cliente', {
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

    numero: DataType.INTEGER,

    telefone: DataType.STRING,

    email: DataType.STRING,

    senha: DataType.STRING,

    cpf: DataType.STRING,

    avatar: {
      type: DataType.STRING,
      defaultValue: 'defaultAvatar.jpeg',
      allowNull: true
    }
  },
  {
    tableName: 'clientes',
    timestamps: false
  })

  Cliente.associate = (models) => {
    Cliente.belongsToMany(models.Profissional, {
      as: 'clienteProfissional',
      foreignKey: 'clienteId',
      otherKey: 'profissionalId',
      through: models.ClienteHasProfissional
    })

    Cliente.hasMany(models.ClienteHasProfissional, {
      as: 'servicosDoCliente',
      foreignKey: 'clienteId'
    })
  }

  return Cliente
}
