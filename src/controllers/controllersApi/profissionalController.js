const { Profissional } = require('../../database/models')

const ProfissionalApiController = {
    getAllProfessional: async (req, res) => {
        const professionals = await Profissional.findAll()
        return res.json(professionals)
    }
}
module.exports = ProfissionalApiController