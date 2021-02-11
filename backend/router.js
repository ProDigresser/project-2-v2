const express = require('express')
const router = express.Router()
const dataController = require('./controllers/data')


router.route('/postcode/:query')
  .get(dataController.getPostCode)

router.route('/just-eat/:query')
  .get(dataController.getData)

router.route('/maps/:query')
  .get(dataController.getStaticMap)

module.exports = router 
