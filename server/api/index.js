const router = require('express').Router()

router.use('/projects', require('./projects'))
router.use('/contact', require('./contact'))

module.exports = router

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
