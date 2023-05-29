const BiblioModel = require('../models/LivresModels');

module.exports = async (req, res) => {
    const {id} = req.params;
    const biblio = await BiblioModel.findById(id);
    // await biblio.deleteOne({id});
    await biblio.deleteOne({id});
    res.status(200).json({biblio, message:"Operation réussie"});  
}