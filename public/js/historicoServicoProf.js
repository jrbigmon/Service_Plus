window.addEventListener('load', async () => {
    let cepsToApi = document.querySelectorAll('.cepsToApi')
    
    for (let cep of cepsToApi) {
        const response = await axios(`https://viacep.com.br/ws/${cep.innerHTML}/json`)
        let endereco = response.data.logradouro
        if(endereco) {
            cep.innerHTML = 'End: ' + endereco
        } else {
            cep.innerHTML = 'Cep: ' + cep.innerHTML
        }   

    }

})