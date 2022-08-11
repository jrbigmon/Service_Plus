window.addEventListener('load', () => {
    let formulario = document.querySelector('.formulario');
    let inputs = document.querySelectorAll('input');

    let errors = [];

    formulario.addEventListener('submit', (event) => {

        for (let input of inputs){
            let campo = input.value.trim()
            if(campo == ""){
                errors.push(input.name)
    
                input.style.borderBottom = '1px solid red'
            } else {
                input.style.borderBottom = '1px solid green'
            }
        }
        if(errors.length > 0) {
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