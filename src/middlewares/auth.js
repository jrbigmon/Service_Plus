function auth(req, res, next){
    if(typeof(req.session.usuario)!= "undefined"){
        return next()
    } else {
        return res.redirect('/login/?usuario=cliente');
    }
}

module.exports = auth;