const express = require(`express`)
const routes = express.Router()
const feedfun = require(`../controller/postcontroller`)

routes.get (`/`, feedfun.getHomepage);// we replace / to new feed

routes.get(`/new-feed`, feedfun.getnewfeed)

routes.post(`/feed`, feedfun.createFEED)

routes.get(`/fullFEED/:id`, feedfun.getFullFEED)

routes.post(`/delete-feed/:id`, feedfun.deleteFEED)

routes.get(`/update-feed/:id`, feedfun.getUpdatepage)

routes.post(`/update-feed/:id`, feedfun.editFEED)

module.exports = routes