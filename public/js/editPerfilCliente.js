window.addEventListener('load', async () => {
    const cep = document.querySelector('#cep')
    const endereco = document.querySelector('#endereco')
    const response = await axios(`https://viacep.com.br/ws/${cep.value}/json`)
    endereco.value = response.data.logradouro
})