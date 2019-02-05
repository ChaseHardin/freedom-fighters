module.exports = function (app, db) {
    app.get('/api/hello', (req, res) => {
        res.send({ express: 'Hello From Express' });
      });
};