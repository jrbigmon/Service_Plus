const homeController = {
    index: (req, res) => { res.render('home', {title: 'home'})}
}
module.exports = homeController;