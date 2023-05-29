
const mongoose = require('mongoose');
const BiblioSchema = new mongoose.Schema({

Titre:{

type: String

},

auteur:{

type: String

},

prix:{

type: String

},

Isbn:{

type: Number

},

Stock:{

type: Boolean

}

})




const BiblioModel = mongoose.model('livres', BiblioSchema);

module.exports = BiblioModel;


