const BiblioModel = require('../models/LivresModels');
module.exports = async (req, res) => {

const {Titre,auteur,prix,Isbn,Stock} = req.body;

console.log(Titre, auteur, prix, Isbn, Stock);

const biblio = new BiblioModel({

Titre,
auteur,
prix,
Isbn,
Stock,

})

const newBiblio = await biblio.save();

res.json(newBiblio);

};