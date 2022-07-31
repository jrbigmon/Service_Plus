let checkbox = document.getElementById('checkbox-profissional');
let select = document.getElementById('select-areas');

checkbox.onclick = () => {
    if(checkbox.checked) {
        select.removeAttribute('disabled')
    }
    else {
        select.setAttribute('disabled', 'disabled')
    }
}