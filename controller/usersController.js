function getUsers(req, res, next) {
    res.render('index', {
        title: 'user page'
    })
}

module.exports= {
    getUsers
}