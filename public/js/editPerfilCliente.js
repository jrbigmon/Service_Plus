window.addEventListener('load', () => {
    const cep = document.querySelector('#cep')
    cep.addEventListener('change', async() => {
        const endereco = document.querySelector('#endereco')
        const response = await axios(`https://viacep.com.br/ws/${cep.value}/json`)
        endereco.value = response.data.logradouro
    })
})