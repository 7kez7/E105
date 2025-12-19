const express = require('express');

const router = express.Router();
const roadPiratesController = require('../controllers/roadPiratesController');

router.get('/', roadPiratesController.getAll);
router.get('/add', roadPiratesController.getAddForm);
router.post('/add', roadPiratesController.postAdd);
router.get('/stats', roadPiratesController.getStats);
router.get('/about', roadPiratesController.getAbout);
router.get('/edit/:id', roadPiratesController.getEditForm);
router.post('/edit/:id', roadPiratesController.postEdit);
router.post('/delete/:id', roadPiratesController.deleteRoadPirate);

module.exports = router;