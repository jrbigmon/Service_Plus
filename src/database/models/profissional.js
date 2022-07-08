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
            foreignkey: true,
        }
    },
    {
        tableName: 'profissionais',
        timestamps: false
    })
    return Profissional;
}