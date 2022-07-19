module.exports = (sequelize, DataType) => {
    const ClienteHasProfissional = sequelize.define('ClienteHasProfissional', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: DataType.INTEGER,
            foreignkey: true
        },

        profissional_id: {
            type: DataType.INTEGER,
            foreignkey: true
        },

        preco_servico: DataType.FLOAT,

        descricao_servico: DataType.STRING,

        situacao_servico_id: {
            type: DataType.INTEGER,
            foreignkey: true
        }
    },

    {
        tableName: 'clientes_has_profissionais',
        timestamps: false
    })

    ClienteHasProfissional.associate = (models) => {
        ClienteHasProfissional.belongsTo(models.SituacaoServico, {
            foreignKey: 'situacao_servico_id',
            as: 'situacao_servico'
        })
    }


    return ClienteHasProfissional;
}