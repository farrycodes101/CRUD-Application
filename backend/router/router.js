const express = require('express');
const router = express.Router();
const { data, getalldata, getdatabyId, deletedata, updatedatabyId } = require('../controller/userController.js');

router.post('/add', data);
router.get('/', getalldata);
router.get('/getalldata/:id', getdatabyId);
router.put('/update/:id', updatedatabyId);
router.delete('/delete/:id', deletedata);

module.exports = router;