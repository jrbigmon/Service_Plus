const auth = (req, res, next) => {
    if(req.session.usuario != undefined){
        
        res.locals.usuario = req.session.usuario; 
        
        return next();

    } else {
        return res.redirect('/login/?usuario=cliente');
    }
};

module.exports = auth;