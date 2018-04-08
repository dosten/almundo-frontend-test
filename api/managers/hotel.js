const MongoClient = require('mongodb').MongoClient;

const getAll = (name = null, stars = []) => {
    var query = {};

    if (name != null) {
        query['$text'] = { '$search': name };
    }

    if (stars.length > 0) {
        query['stars'] = { '$in': stars.map(Number) }
    }

    return new Promise((resolve, reject) => {
        MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
            const collection = client.db().collection('hotels');
            collection.find(query).toArray((err, hotels) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hotels);
                }
                client.close();
            });
        });
    });
};

module.exports = { getAll };
