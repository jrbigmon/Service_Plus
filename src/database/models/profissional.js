module.exports = (sequelize, DataType) => {
    const Profissional = sequelize.define('Profissional', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: DataType.STRING,

        sobrenome: DataType.STRING,

        data_nascimento: DataType.DATE,

        cep: DataType.STRING,

        telefone: DataType.STRING,

        email: DataType.STRING,

        senha: DataType.STRING,

        area_id: {
            type: DataType.INTEGER,
            foreignKey: true,
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
        timestamps: false,
        underscored: true,
    })

    Profissional.associate = (models) => {
        Profissional.belongsTo(models.Area, {
            foreignkey: 'area_id',
            as: 'area'
        }),

        Profissional.belongsToMany(models.Cliente, {
            foreignKey: 'profissional_id' ,
            otherKey: 'cliente_id',
            through: models.ClienteHasProfissional
        })
    }
    
    return Profissional;
}