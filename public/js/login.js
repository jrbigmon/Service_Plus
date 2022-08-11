window.addEventListener('load', () => {
    let formulario = document.querySelector('.formulario');
    let inputs = document.querySelector('input.nome');

    formulario.addEventListener('submit', (event) => {

        let errors = [];

        let campo = inputs;

        for (let input of inputs){
            if(campo.value == ""){
                errors.push(` ${input.name}`)
    
                input.style.border = '1px solid red'
            } else {
                input.style.border = '1px solid green'
            }
        }
        if(errors.length > 0) {
            wal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Possuem campos Vazios!',
                footer: '<a href="">Why do I have this issue?</a>'
              })

              event.preventDefault()
        }
    })
})