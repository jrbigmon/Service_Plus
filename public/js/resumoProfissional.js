window.addEventListener('load', () => {
    let dataServico = document.getElementById('data_servico');

    dataServico.addEventListener('click', () => {    
        let dia = new Date().getDate().toString();
        dia.length <= 1 ? dia = `0${dia}` : dia;

        let mes = (new Date().getMonth() + 1).toString();
        mes.length <= 1 ? mes = `0${mes}` : mes;

        let ano = new Date().getFullYear().toString();

        const dataMinima = `${ano}-${mes}-${dia}`;
        const dataMaxima = `${ano}-${mes}-30`;

        dataServico.min = dataMinima
        dataServico.max = dataMaxima;
    });

    const formulario = document.querySelector('details form');
    const inputs = document.querySelectorAll('input[name="data_servico"], textarea[name="descricao_servico"]');
    
    formulario.addEventListener('submit', (event) => {  
        let errors = [];

        for(let input of inputs) {
            let inputValue = input.value.trim();

            if(inputValue.length < 1){
                errors.push(input.name);

                input.style.border = '1px solid red';

            } else {
                input.style.border = '1px solid green';
            }
        }
        if(errors.length > 0){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Possuem campos Vazios!',
                footer: '<a href="">Why do I have this issue?</a>'
              });

            event.preventDefault();
        }
    })
})


