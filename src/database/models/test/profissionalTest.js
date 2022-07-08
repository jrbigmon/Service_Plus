const {Profissional} = require('../');

const profissionais = async () => {
    const profissionais = await Profissional.findAll();
    console.log(profissionais)
}
profissionais();