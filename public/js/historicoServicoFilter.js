window.addEventListener('load', () => {
    const params = new URLSearchParams(location.search)
    const status = params.get('status')
    const order = params.get('ordem')
    const precoMax = params.get('precoMax')
    const precoMin = params.get('precoMin')
    const data = params.get('data')

    const radioCrescente = document.querySelector('#asc')
    const radioDecrescente = document.querySelector('#desc')
    const checkboxesStatus = document.querySelectorAll('input[name=status]')
    const inputPrecoMin = document.querySelector('input[name=precoMin]')
    const inputPrecoMax = document.querySelector('input[name=precoMax]')
    const inputData = document.querySelector('input[name=data]')

    checkboxesStatus.forEach(checkbox => {
        if(checkbox.value == status){
            checkbox.setAttribute('checked', 'checked')
        }
    })

    if(order == 'ASC'){
        radioCrescente.setAttribute('checked', 'checked')
    }
    if(order == 'DESC'){
        radioDecrescente.setAttribute('checked', 'checked')
    }

    inputPrecoMin.value = precoMin
    inputPrecoMax.value = precoMax
    data ? inputData.value = data : ''
})