const BiblioModel = require('../models/LivresModels');

module.exports = async(req, res) => {
    // res.send('funcionando!')
    const Biblio = await BiblioModel.find();
    res.send(Biblio);
}