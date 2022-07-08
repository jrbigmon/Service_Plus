module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
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
        senha: DataType.STRING
    },
    {
        tableName: 'clientes',
        timestamps: false
    })
    return Cliente;
}