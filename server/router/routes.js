const express = require('express');
const { getCountries, getCountryInfo } = require('../controllers/countries');
const router = express.Router();

router.get('/', getCountries)
router.get('/:country', getCountryInfo)


module.exports = router;