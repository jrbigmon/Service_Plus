window.addEventListener('load', () => {
    const datasAtuais = document.querySelectorAll('.date-br');

    for (let data of datasAtuais) {
        const dataNova = new Date(data.innerHTML);
        const formatar = Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short'
        })
        data.innerHTML = formatar.format(dataNova);
    }
})