window.addEventListener('load', async () => {
    let cepsToApi = document.querySelectorAll('.cepsToApi')
    
    for (let cep of cepsToApi) {
        const response = await axios(`https://viacep.com.br/ws/${cep.innerHTML}/json`)
        let endereco = response.data.logradouro
        cep.innerHTML = 'End: ' + endereco
    }


})