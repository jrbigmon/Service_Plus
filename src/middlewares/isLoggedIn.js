const isLoggedIn = (req, res, next) => {
  if (req.session.usuario != undefined) {
    res.locals.usuario = req.session.usuario
  }

  return next()
}
module.exports = isLoggedIn
