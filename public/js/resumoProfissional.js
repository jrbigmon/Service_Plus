let dia = new Date().getDate().toString();
dia.length <= 1 ? dia = `0${dia}` : dia;

let mes = (new Date().getMonth() + 1).toString();
mes.length <= 1 ? mes = `0${mes}` : mes;

let ano = new Date().getFullYear().toString();

dataMinima = `${ano}-${mes}-${dia}`;
dataMaxima = `${ano}-${mes}-30`;

let dataServico = document.getElementById('data_servico');

dataServico.addEventListener('click', () => {    
    dataServico.min = dataMinima
    dataServico.max = dataMaxima;
})

