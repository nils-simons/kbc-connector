exports.auth = (req, res, next) => {
    if (req.originalUrl == '/login.html') {
        next()
        return
    }

    let user = req.cookies.user
    let token = req.cookies.token

    if (!user || !token) {
        res.redirect('/login.html')
        return
    }

    console.log(token)
    next()
}