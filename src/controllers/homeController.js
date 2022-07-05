const homeController = {
    index: (req, res) => { res.render('./home/home', {title: 'home'} ) },
    login: (req, res) => { res.render('./home/login', {title: 'login'} ) },
}
module.exports = homeController;