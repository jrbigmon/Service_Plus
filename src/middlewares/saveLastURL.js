const saveLastUrl = (req, res, next) => {
    req.session.lastUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    next()
}

module.exports = saveLastUrl