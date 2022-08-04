
window.addEventListener('load', () => {
    let checkbox = document.getElementById('checkbox-profissional');
    let select = document.getElementById('select-areas');
    let form = document.querySelector('.meu-form');
    let inputs = document.querySelectorAll('input');

    checkbox.addEventListener('click', () => {
        if(checkbox.checked) {
            select.removeAttribute('hidden');
        }
        else {
            select.setAttribute('hidden', 'hidden')
        }
    });

    form.addEventListener('submit', (event) => {
        let errors = []

        for (let input of inputs) {
            
            if(input.type !== 'checkbox') {
                let campo = input.value.trim();

                if(campo.length == 0){
                    errors.push(` ${input.name}`);
                    
                    input.style.border = '1px solid red';

                } else {
                    input.style.border = '1px solid green'
                }
            }
        }
        if(errors.length > 0){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Possuem campos Vazios!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            event.preventDefault();
        }
    })


})

