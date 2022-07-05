const profissionalController = {
    show: (req, res) => { res.render('./client/listaDeProf', {title:'Lista de Profissionais'})}
}
module.exports = profissionalController;