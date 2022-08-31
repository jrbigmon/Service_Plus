window.addEventListener('load', () => {
    const params = new URLSearchParams(location.search)
    const areas = params.getAll('area')
    const order = params.get('order')
    const localidade = params.get('localidade')

    const radioCrescente = document.querySelector('#crescente')
    const radioDecrescente = document.querySelector('#decrescente')
    const checkboxEletricista = document.querySelector('#eletricista')
    const checkboxEncanador = document.querySelector('#encanador')
    const checkboxPintor = document.querySelector('#pintor')
    const checkboxLocalidade = document.querySelector('#localidade')

    areas.forEach(area => {
        if(area == 1){
            checkboxEletricista.setAttribute('checked', 'checked')
        }
        if(area == 2){
            checkboxEncanador.setAttribute('checked', 'checked')
        }
        if(area == 3){
            checkboxPintor.setAttribute('checked', 'checked')
        }
    })

    if(order == 'ASC'){
        radioCrescente.setAttribute('checked', 'checked')
    }
    if(order == 'DESC'){
        radioDecrescente.setAttribute('checked', 'checked')
    }
    if(localidade){
        checkboxLocalidade.setAttribute('checked', 'checked')
    }
})