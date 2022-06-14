const homeController = {
    index: (req, res) => { res.render('home', {title: 'home'} ) },
    login: (req, res) => { res.render('login', {title: 'login'} ) },
}
module.exports = homeController;