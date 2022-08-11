window.addEventListener('load', () => {
  const formulario = document.querySelector('.formulario')
  const inputs = document.querySelectorAll('input')

  formulario.addEventListener('submit', (event) => {
    const errors = []

    for (const input of inputs) {
      const campo = input.value.trim()
      if (campo === '') {
        errors.push(input.name)

        input.style.borderBottom = '1px solid red'
      } else {
        input.style.borderBottom = '1px solid green'
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
