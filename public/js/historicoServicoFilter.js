window.addEventListener('load', () => {
    const params = new URLSearchParams(location.search)
    const status = params.get('status')
    const order = params.get('ordem')
    const precoMax = params.get('precoMax')
    const precoMin = params.get('precoMin')

    const radioCrescente = document.querySelector('#asc')
    const radioDecrescente = document.querySelector('#desc')
    const checkboxesStatus = document.querySelectorAll('input[name=status]')

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
})