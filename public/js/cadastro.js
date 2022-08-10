
window.addEventListener('load', () => {
  const checkbox = document.getElementById('checkbox-profissional')
  const select = document.getElementById('select-areas')
  const form = document.querySelector('.meu-form')
  const inputs = document.querySelectorAll('input')

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      select.removeAttribute('hidden')
    } else {
      select.setAttribute('hidden', 'hidden')
    }
  })

  form.addEventListener('submit', (event) => {
    const errors = []

    for (const input of inputs) {
      if (input.type !== 'checkbox') {
        const campo = input.value.trim()

        if (campo.length == 0) {
          errors.push(` ${input.name}`)

          input.style.border = '1px solid red'
        } else {
          input.style.border = '1px solid green'
        }
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
