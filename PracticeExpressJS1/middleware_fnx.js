const reqFilter = (req, res, next) => {
    if (!req.query.qualification || req.query.qualification !== 'MCA') {
        res.send('You are not eligible to access this route');
    } else {
        next();
    }
};

module.exports = reqFilter;