function getInbox(req, res, next) {
    res.render('index', {
        title: 'inbox page'
    })
}

module.exports= {
    getInbox
}