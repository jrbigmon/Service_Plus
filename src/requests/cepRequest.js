const axios = require('axios')

const viaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

const cepRequest = {
  getCep: async (cep) => {
    try {
      const response = await viaCepApi.get(`${cep}/json`)
      return response.data.logradouro
    } catch (err) {
      err.message = new Error('CEP inexistente!')
      console.log(err.message)
    }
  },
  getLocalidade: async (cep) => {
    try {
      const response = await viaCepApi.get(`${cep}/json`)
      return response.data.localidade
    } catch(err) {
      err.message = new Error('CEP inexistente!')
      console.log(err.message)
    }
  }

}

module.exports = cepRequest
