const axios = require('axios');
const defaults = require('./defaults');
const url = 'json' 

const cepRequest = {
    getCep: (cep) => axios ({
        ...defaults,
        method: 'get',
        url: `${cep}/${url}`
    })
}
module.exports = cepRequest;