const axios = require('axios')
require('dotenv').config()

function getPostCode(req, res) {
  const query = req.params.query

  axios.get(`https://api.postcodes.io/postcodes/${query}`)
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
}

function getData(req, res) {
  const query = req.params.query

  axios.get(`https://uk.api.just-eat.io/restaurants/bypostcode/${query}`)
    .then(resp => res.send(resp.data))
    .catch(err => res.send(err))
}

function getStaticMap(req, res) {
  const query = req.params.query
  const token = process.env.token
  const map = `https://maps.googleapis.com/maps/api/staticmap?center=${query}&zoom=17&scale=1&size=400x400&maptype=roadmap&key=${token}&format=png&visual_refresh=true`
  res.send(map)
}

module.exports = {
  getPostCode,
  getData,
  getStaticMap
}