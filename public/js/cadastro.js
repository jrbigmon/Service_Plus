let checkbox = document.getElementById('checkbox-profissional');
let select = document.getElementById('select-areas');

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        select.removeAttribute('hidden');
    }
    else {
        select.setAttribute('hidden', 'hidden')
    }
})