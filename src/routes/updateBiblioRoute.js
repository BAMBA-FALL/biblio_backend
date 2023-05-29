const BiblioModel = require('../models/LivresModels');

module.exports = async (req, res) => {
    const {id} = req.params;
    const biblio = await BiblioModel.findById(id);
    
    biblio.Titre = req.body.Titre
    biblio.auteur = req.body.auteur
    biblio.prix = req.body.prix
    biblio.ISBN = req.body.ISBN
    biblio.Stock = req.body.Stock
    await biblio.save();
    res.json(biblio)
}