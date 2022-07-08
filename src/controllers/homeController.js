const homeController = {
    index: (req, res) => { res.render('./home/home', {title: 'home'} ) },
    login: (req, res) => { res.render('./home/login', {title: 'login'} ) },
    sobre: (req, res) => { res.render('./home/sobre', {title: 'sobre'} ) },

}
module.exports = homeController;