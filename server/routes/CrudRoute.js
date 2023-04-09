const express = require('express');
const { createData, AllData, deleteData, UpdateData } = require('../controllers/crudController');
const router = express.Router();


router.route('/create').post(createData);
router.route('/alldata').get(AllData);
router.route('/delete-data/:id').delete(deleteData)
router.route('/update-data/:id').put(UpdateData)


module.exports=router;