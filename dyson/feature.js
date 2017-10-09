module.exports = {
  path: '/feature/:foo?',
  status: (req, res, next) => {
    if(req.params.foo === '999') {
      res.status(404);
    }
    next();
  }
}