const hotelManager = require('../managers/hotel');

const getAll = (req, res) => {
    hotelManager.getAll(req.query.name, req.query.stars).then(hotels => {
        res.json({ data: hotels });
    }).catch(err => {
        res.status(500).json({ error: err });
    });
};

module.exports = { getAll };
