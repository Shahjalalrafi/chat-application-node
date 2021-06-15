const createError = require('http-errors')

// 404 not found function
function notFoundHandler(req, res, next) {
    next(createError(404, 'your requested content was not found'))
}

// default error handler 
function errorHandler(err, req, res, next) {
    res.locals.error = err

    res.status(err.status || 500)

    if(!res.locals.html) {
        // html response
        res.render("error", {
            title: "error page"
        })
    }else {
        // json response
        res.json(res.locals.error)
    }
}

module.exports = {notFoundHandler, errorHandler}