window.addEventListener('load', async () => {
  let cepsToApi = document.querySelector('.cepsToApi')
  const response = await axios(`https://viacep.com.br/ws/${cepsToApi.innerText}/json`)
  let endereco = response.data.localidade
  if(endereco) {
    cepsToApi.innerHTML = '📍' + endereco
  } else {
    cepsToApi.innerHTML = 'Cep: ' + cepsToApi.innerHTML
  }   

  const dataServico = document.getElementById('dataServico')

  dataServico.addEventListener('click', () => {
    let dia = new Date().getDate().toString()
    dia.length <= 1 ? dia = `0${dia}` : dia

    let mes = (new Date().getMonth() + 1).toString()
    mes.length <= 1 ? mes = `0${mes}` : mes

    const ano = new Date().getFullYear().toString()

    const dataMinima = `${ano}-${mes}-${dia}`

    dataServico.min = dataMinima
  })

  const formulario = document.querySelector('form')
  const inputs = document.querySelectorAll('input[name="dataServico"], textarea[name="descricaoServico"]')

  formulario.addEventListener('submit', (event) => {
    const errors = []

    for (const input of inputs) {
      const inputValue = input.value.trim()

      if (inputValue.length < 1) {
        errors.push(input.name)

        input.style.border = '1px solid red'
      } else {
        input.style.border = '1px solid green'
      }
    }
    if (errors.length > 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Possuem campos Vazios!',
        footer: '<a href="">Why do I have this issue?</a>'
      })

      event.preventDefault()
    }
  })
})
