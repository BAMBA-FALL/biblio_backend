const express = require('express'); // 1. Déclarer la bibliothèque express
const router = express.Router();

const loginRoute = require('../src/routes/loginRoute');
const readBiblioRoute = require('../src/routes/readBibliosRoute');
const createBiblioRoute = require('../src/routes/createBiblioRoute');
const updateBiblioRoute = require('../src/routes/updateBiblioRoute');
const deleteBiblioRoute = require('../src/routes/deleteBiblioRoute');
const verification = require('../src/middleware/verification');
const suprimer = require('./routes/deleteBiblioRoute')



// router.post('/login', (req, res) =>{
//     res.send('está funcionando!')
// });

router.post('/login', loginRoute);

// CRUD ROUTES
router.post('/biblios', verification ,createBiblioRoute); // C du CRUD
router.get('/biblios', verification ,readBiblioRoute); // R du CRUD
router.put('/biblios/:id',verification ,updateBiblioRoute); // U du CRUD
router.delete('/biblios/:id',verification, deleteBiblioRoute); // D du CRUD


module.exports = router;
