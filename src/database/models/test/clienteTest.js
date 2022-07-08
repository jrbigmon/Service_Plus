const {Cliente} = require('../');

const clientes = async () => {
    const clientes = await Cliente.findAll();
    console.log(clientes)
}
clientes();