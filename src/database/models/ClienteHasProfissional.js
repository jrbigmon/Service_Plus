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

        data_servico: DataType.DATE,

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
        }),

        ClienteHasProfissional.belongsTo(models.Cliente, {
            foreignKey: 'cliente_id',
            as: 'cliente'
        }),

        ClienteHasProfissional.belongsTo(models.Profissional, {
            foreignKey: 'profissional_id',
            as: 'profissional'
        })


    }


    return ClienteHasProfissional;
}